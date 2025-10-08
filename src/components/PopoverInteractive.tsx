import React, { useState } from 'react';
import { X } from 'lucide-react';

const STYLE_ELEMENT_ID = 'popover-interactive-styles';
const SVG_NS = 'http://www.w3.org/2000/svg';
const INTERACTIVE_STYLE = `
.popover-interactive__target {
  cursor: pointer;
  transition: transform 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
}
.popover-interactive__target.popover-interactive__hover {
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.18));
  opacity: 0.96;
}
`;

// Import all stakeholder MDX files
import ProfBrouns from '@/mdx/stakeholders/prof_brouns.mdx';
import FieldTestExperts from '@/mdx/stakeholders/field_test_experts.mdx';
import DrKoster from '@/mdx/stakeholders/dr_koster.mdx';
import DrVanOosten from '@/mdx/stakeholders/dr_van_oosten.mdx';
import RivmGmo from '@/mdx/stakeholders/rivm_gmo.mdx';
import JohannisFlorid from '@/mdx/stakeholders/johannis_florid.mdx';
import ElineKamerik from '@/mdx/stakeholders/eline_kamerik.mdx';
import ErikDeJonge from '@/mdx/stakeholders/erik_de_jonge.mdx';

//import steps MDX files
import Step1 from '@/mdx/steps/step1.mdx';
import Step2 from '@/mdx/steps/step2.mdx';
import Step4 from '@/mdx/steps/step4.mdx';
import Step5 from '@/mdx/steps/step5.mdx';
import Step7 from '@/mdx/steps/step7.mdx';
import Step8 from '@/mdx/steps/step8.mdx';
import Step9 from '@/mdx/steps/step9.mdx';
import Step10 from '@/mdx/steps/step10.mdx';

// Mapping of class names to their corresponding MDX content
const popoverContentMap: Record<string, React.FC> = {
  'prof_brouns': ProfBrouns,
  'field_test_experts': FieldTestExperts,
  'dr_koster': DrKoster,
  'dr_van_oosten': DrVanOosten,
  'rivm_gmo': RivmGmo,
  'johannis_florid': JohannisFlorid,
  'eline_kamerik': ElineKamerik,
  'erik_de_jonge': ErikDeJonge,
  'step1': Step1,
  'step2': Step2,
  'step4': Step4,
  'step5': Step5,
  'step7': Step7,
  'step8': Step8,
  'step9': Step9,
  'step10': Step10,

};

interface PopoverInteractiveProps {
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

export const PopoverInteractive: React.FC<PopoverInteractiveProps> = ({ children }) => {
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const scrollPositionRef = React.useRef<number>(0);
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  // Block body scroll when popover is open
  React.useEffect(() => {
    if (activePopover) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [activePopover]);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement;

    // Find the closest group element with one of our popover classes
    for (const className of Object.keys(popoverContentMap)) {
      const closestGroup = target.closest(`g.${className}`);
      if (closestGroup) {
        e.stopPropagation();
        setActivePopover(className);
        return;
      }
    }
  };

  // Clone the SVG and add click handlers
  const existingOnClick = children.props.onClick;

  const enhancedChildren = React.cloneElement(children, {
    onClick: (event: React.MouseEvent<SVGSVGElement>) => {
      handleSvgClick(event);
      existingOnClick?.(event);
    },
    style: {
      ...(children.props as { style?: React.CSSProperties }).style,
    },
    ref: svgRef,
  });

  // Inject shared hover styles once
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById(STYLE_ELEMENT_ID);
    if (existing && existing instanceof HTMLStyleElement) {
      existing.textContent = INTERACTIVE_STYLE;
      return;
    }

    const styleElement = document.createElement('style');
    styleElement.id = STYLE_ELEMENT_ID;
    styleElement.textContent = INTERACTIVE_STYLE;
    document.head.appendChild(styleElement);
  }, []);

  // Add hover effects and cursor to interactive elements
  React.useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const cleanupFunctions: (() => void)[] = [];

    // For each class name in the map, find all matching group elements
    Object.keys(popoverContentMap).forEach((className) => {
      const groups = svg.querySelectorAll(`g.${className}`);

      groups.forEach((group) => {
        if (!(group instanceof SVGGraphicsElement)) {
          return;
        }

        const svgElement = group as SVGGraphicsElement;

        svgElement.classList.add('popover-interactive__target');

        const hasRectSibling = Array.from(svgElement.children).some((child) => child.nodeName.toLowerCase() === 'rect');

        if (!hasRectSibling && 'getBBox' in svgElement) {
          try {
            const bbox = svgElement.getBBox();
            if (bbox.width > 0 && bbox.height > 0) {
              const padding = Math.max(Math.min(bbox.width, bbox.height) * 0.05, 8);
              const rect = document.createElementNS(SVG_NS, 'rect');
              rect.setAttribute('x', (bbox.x - padding).toString());
              rect.setAttribute('y', (bbox.y - padding).toString());
              rect.setAttribute('width', (bbox.width + padding * 2).toString());
              rect.setAttribute('height', (bbox.height + padding * 2).toString());
              rect.setAttribute('fill', 'transparent');
              rect.setAttribute('pointer-events', 'all');
              rect.setAttribute('data-popover-hitbox', 'true');
              svgElement.insertBefore(rect, svgElement.firstChild);
            }
          } catch {
            // Silently ignore groups that cannot provide a bounding box
          }
        }

        const handleMouseEnter = () => {
          svgElement.classList.add('popover-interactive__hover');
        };

        const handleMouseLeave = () => {
          svgElement.classList.remove('popover-interactive__hover');
        };

        group.addEventListener('mouseenter', handleMouseEnter);
        group.addEventListener('mouseleave', handleMouseLeave);

        cleanupFunctions.push(() => {
          group.removeEventListener('mouseenter', handleMouseEnter);
          group.removeEventListener('mouseleave', handleMouseLeave);
          svgElement.classList.remove('popover-interactive__hover');
          svgElement.classList.remove('popover-interactive__target');
        });
      });
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [children]);

  const ContentComponent = activePopover ? popoverContentMap[activePopover] : null;

  return (
    <div className="relative w-full h-full hover:[&>div:first-child]:hidden">
      {/* Interactive indicator */}
      <div className="absolute top-3 right-2 z-10 flex items-center gap-2 bg-primary border text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
        </svg>
        Explore
      </div>
      {enhancedChildren}

      {activePopover && ContentComponent && (
        <>
          {/* Overlay backdrop */}
          <button
            className="fixed inset-0 bg-black/50 z-50 cursor-default"
            onClick={() => setActivePopover(null)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setActivePopover(null);
            }}
            aria-label="Close overlay"
            type="button"
          />
          {/* Popover content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto relative pointer-events-auto"
              aria-modal="true"
              onWheel={(e) => {
                // Prevent event from bubbling to parent elements
                e.stopPropagation();
              }}
            >
              <button
                onClick={() => setActivePopover(null)}
                className="sticky top-2 right-2 float-right p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Close popover"
                type="button"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-8 prose prose-lg dark:prose-invert max-w-none">
                <ContentComponent />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopoverInteractive;

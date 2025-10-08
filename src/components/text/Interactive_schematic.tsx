import React from 'react';
import { PopoverInteractive } from '../PopoverInteractive';

export const InteractiveSchematic: React.FC = () => {
   return (
      <PopoverInteractive>
         <svg viewBox="0 0 1152.731 543.244" xmlns="http://www.w3.org/2000/svg" className="h-full w-full font-semibold text-xs overflow-visible border py-5 px-10 rounded-3xl bg-white">
            <style>
               {`
     
                  .step1, .step2, .step4, .step5, .step7, .step8, .step9, .step10 {
                     transition: transform 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
                  }
                  .step1:hover, .step2:hover, .step4:hover, .step5:hover, .step7:hover, .step8:hover, .step9:hover, .step10:hover {
                     transform: translateY(-10px);
                  }
               `}
            </style>
            <defs>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__q">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-001-6ea17f9075df.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__s">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-002-244081c8e8e8.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__a">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-002-244081c8e8e8.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__t">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-003-4d541b20293a.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__b">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-004-3aaa3bdceed0.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__c">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-005-b26400b01c50.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__d">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-006-0f7e4229b0db.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__e">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-007-17af7d7445e0.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__f">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-008-c0705df95d94.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__g">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-009-8d8be9f62132.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__h">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-007-17af7d7445e0.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__i">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-008-c0705df95d94.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__j">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-010-632a35556027.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__k">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-008-c0705df95d94.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__l">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-009-8d8be9f62132.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__r">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-011-f0aeaa5bf0a0.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__m">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-007-17af7d7445e0.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__n">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-008-c0705df95d94.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__o">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-009-8d8be9f62132.webp" />
               </mask>
               <mask maskUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" id="prefix__p">
                  <image width="1" height="1" preserveAspectRatio="none"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-012-dfeb35548ef0.webp" />
               </mask>
            </defs>
               <g className="step4">
                  <g transform="translate(211.042 -67.862)">
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__a)"
                  transform="matrix(73.44 0 0 136.96 514.61 151.04)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-014-303763d94ac1.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__b)"
                  transform="matrix(78.88 0 0 70.88 455.04 93.76)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-016-81616490af3a.webp" /><text
                     transform="rotate(-34.09)" x="311.098" y="395.834">
                  <tspan className='text-[0.5rem]' x="311.098 315.153 317.053 321.108 322.896 329.225 335.53 337.317 339.281 343.837 348.047" y="395.834">0.4
                     mM IPTG</tspan>
               </text><text x="472.68" y="76.645">Protein expression</text><text x="472.68" y="92.645">induction with IPTG</text>
               <path
                  d="M519.098 123.158v2.197h29.859v20.133h-4.394l5.494 10.989 5.494-10.989h-4.397v-21.23a1.1 1.1 0 00-1.097-1.1z" />
                  </g>
               </g>
               <g className="step5">
                  <g transform="translate(211.042 -67.862)">
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__c)"
                  transform="matrix(170.56 0 0 189.76 728.64 138.88)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-017-149c703ebd36.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__d)"
                  transform="matrix(68.32 0 0 49.28 701.12 178.4)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-018-c15226cc1f03.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__e)"
                  transform="matrix(34.4 0 0 111.36 665.6 139.84)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-019-c0cc7495d0c3.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__f)"
                  transform="matrix(36.96 0 0 27.04 664.32 138.88)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-020-75b947163d5e.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__g)"
                  transform="matrix(17.92 0 0 16.32 673.76 235.04)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-021-8686b02663c9.webp" /><text x="658.855"
                     y="109.011">Harvest and lysis via</text><text x="658.855" y="125.011">centrifugation and sonication</text>
                  </g>
               </g>
               <g className="step6">
                  <g transform="translate(211.042 -67.862)">
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__h)"
                  transform="matrix(35.18728 0 0 113.90858 804.972 447.875)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-019-c0cc7495d0c3.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__i)"
                  transform="matrix(37.80587 0 0 27.65884 803.663 446.893)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-020-75b947163d5e.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__j)"
                  transform="matrix(34.72 0 0 112.32 737.76 449.28)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-022-0e5b8de23f0b.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__k)"
                  transform="matrix(37.28617 0 0 27.27863 736.428 448.309)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-020-75b947163d5e.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__l)"
                  transform="matrix(18.07814 0 0 16.46402 746 545.296)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-021-8686b02663c9.webp" /><text x="706.301"
                     y="410.227">Separation into pellet and</text><text x="706.301" y="426.227">supernatant</text>
                  </g>
               </g>
               <g className="step8">
                  <g transform="translate(211.042 -67.862)">
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__m)"
                  transform="matrix(34.4 0 0 111.36 354.547 452.755)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-019-c0cc7495d0c3.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__n)"
                  transform="matrix(36.96 0 0 27.04 353.267 451.795)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-020-75b947163d5e.webp" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__o)"
                  transform="matrix(17.92 0 0 16.32 362.707 547.955)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-021-8686b02663c9.webp" /><text x="316.364"
                     y="413.33">PEG Precipitation of</text><text x="316.364" y="429.33">the supernatant</text>
                  </g>
               </g>
               <g className="step9">
                  <g transform="translate(211.042 -67.862)">
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__p)"
                  transform="matrix(175.68 0 0 227.84 79.68 380.64)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-024-e5e1901a98cb.webp" /><text x="126.001"
                     y="377.736">TEM Imaging</text>
                  </g>
               </g>
            <g className="step10">
               <g transform="translate(211.042 -67.862)">
                  <image width="233.091" height="233.091" preserveAspectRatio="none" xlinkHref="https://static.igem.wiki/teams/5649/platraimages/data-anal.webp" href="https://static.igem.wiki/teams/5649/platraimages/data-anal.webp" x="-211.042"
                     y="378.014" imageRendering="optimizeSpeed" /><text x="-139.2" y="377.736">Image Analysis</text>
               </g>
            </g>
            <g className="step1"><text x="18.309" y="139.762" transform="translate(211.042 -67.862)">Plasmid design</text>
               <path
                  d="M275.64 86.388c-16.16 0-29.315 13.25-29.315 29.475s13.155 29.474 29.315 29.474c16.159 0 29.314-13.25 29.314-29.474 0-16.225-13.155-29.475-29.314-29.475zm0 7.168c12.26 0 22.144 9.932 22.144 22.307 0 12.374-9.884 22.306-22.144 22.306-12.261 0-22.145-9.932-22.145-22.306 0-12.375 9.884-22.307 22.145-22.307z"
                  fill="#171717" />
               <path
                  d="M274.685 85.521a32.2 32.2 0 00-3.204.21l1.05 9.02a22.625 22.625 0 0124.818 17.774l-2.032.064 7.02 6.594 6.594-7.02-2.403.075c-2.348-14.563-14.425-25.396-28.691-26.608a31.572 31.572 0 00-3.152-.11z"
                  fill="#cc0a43" />
            </g>
            <g className="step2">
               <g transform="translate(211.042 -67.862)">
               <path
                  d="M216.686 227.578l-17.407 3.24-.98 1.514a24.736 24.736 0 00-3.988 13.467v.379c0 4.412 1.909 8.607 5.234 11.506a18.534 18.534 0 0012.178 4.562h48.472a16.11 16.11 0 0011.784-5.123l.189-.201a17.311 17.311 0 004.648-11.65 19.204 19.204 0 00-4.09-12.024l-.093-.12a14.184 14.184 0 00-11.125-5.43z"
                  fill="#ffe69d" />
               <path
                  d="M197.984 231.012l-.51.785a38.553 38.553 0 00-1.474 2.588l1.75.867c.423-.814.877-1.612 1.361-2.393l.51-.785zm-1.755.623a39.4 39.4 0 00-.268.447 33 33 0 01.268-.447zm-.717 1.232z"
                  fill="#f7e8c5" />
               <path
                  d="M197.02 230.375c-.172.264-.344.528-.514.793a40.312 40.312 0 00-1.545 2.713l1.035.512c.46-.884.952-1.75 1.479-2.596l.513-.791zm2.607 1.691l-.516.793a35.966 35.966 0 00-1.365 2.4l1.035.512a34.06 34.06 0 011.301-2.283l.514-.79z"
                  fill="#c3b594" />
               <path
                  d="M195.258 236.03a38.587 38.587 0 00-.871 2.466c-.123.428-.24.86-.346 1.291l1.898.455c.1-.397.208-.795.32-1.191.243-.769.512-1.529.805-2.28l-1.806-.742z"
                  fill="#f7e8c5" />
               <path
                  d="M194.191 235.58a39.545 39.545 0 00-.912 2.59c-.129.45-.25.901-.365 1.355l1.125.27c.107-.434.225-.869.348-1.299.263-.834.554-1.66.873-2.475zm2.875 1.184a35.639 35.639 0 00-.806 2.287c-.114.399-.222.799-.322 1.199l1.125.27c.096-.381.195-.761.304-1.14.231-.734.487-1.46.768-2.177z"
                  fill="#c3b594" />
               <path
                  d="M193.684 241.555a38.528 38.528 0 00-.354 3.933l1.953.024a35.38 35.38 0 01.326-3.635zm-1.174.088zm-.219 2.015z"
                  fill="#f7e8c5" />
               <path
                  d="M192.543 241.354a40.29 40.29 0 00-.367 4.128l1.154.014c.05-1.321.168-2.64.354-3.95zm3.067.516a35.426 35.426 0 00-.327 3.65l1.156.013a33.89 33.89 0 01.31-3.472v-.002z"
                  fill="#c3b594" />
               <path
                  d="M195.314 247.168l-1.947.135c.074.784.185 1.562.334 2.336.13.547.28 1.088.445 1.625l1.854-.612a21.379 21.379 0 01-.39-1.43c-.132-.68-.23-1.365-.296-2.054zm-3.062.53zm.164 1.253zm.213 1.145z"
                  fill="#f7e8c5" />
               <path
                  d="M193.367 247.293l-1.152.08c.078.842.197 1.68.357 2.512.14.589.299 1.172.479 1.75l1.097-.364a24.762 24.762 0 01-.447-1.632c-.15-.776-.26-1.557-.334-2.344zm3.102-.213l-1.155.08c.065.692.164 1.38.295 2.063.114.483.245.963.393 1.437l1.098-.363a19.515 19.515 0 01-.362-1.32c-.12-.628-.21-1.26-.27-1.897z"
                  fill="#c3b594" />
               <path
                  d="M196.596 252.164l-1.772.818c.504 1 1.076 1.966 1.713 2.887.137.182.278.363.42.541l1.516-1.23a21.373 21.373 0 01-.37-.475 21.401 21.401 0 01-1.507-2.54zm-2.766 1.402zm.899 1.62z"
                  fill="#f7e8c5" />
               <path
                  d="M194.818 252.973l-1.048.484a26.06 26.06 0 001.84 3.102c.148.197.299.392.452.586l.899-.729c-.144-.18-.286-.363-.424-.547a24.325 24.325 0 01-1.719-2.896zm2.825-1.299l-1.051.482a21.4 21.4 0 001.512 2.55c.122.161.246.321.373.48l.896-.729c-.116-.146-.23-.292-.342-.441-.517-.748-.98-1.53-1.388-2.342z"
                  fill="#c3b594" />
               <path
                  d="M199.564 256.38l-1.367 1.393c.23.221.464.439.703.65a29.01 29.01 0 002.452 1.821l1.037-1.652a26.345 26.345 0 01-2.205-1.639 21.43 21.43 0 01-.62-.572zm-1.226 3.071zm1.303 1.002z"
                  fill="#f7e8c5" />
               <path
                  d="M198.191 257.768l-.81.826c.249.239.502.473.76.703a31.016 31.016 0 002.605 1.932l.613-.98a29.01 29.01 0 01-2.459-1.825 24.463 24.463 0 01-.709-.656zm2.179-2.218l-.811.825c.204.197.413.39.625.578a26.345 26.345 0 002.212 1.643l.614-.98a24.5 24.5 0 01-2.067-1.536 19.25 19.25 0 01-.574-.53z"
                  fill="#c3b594" />
               <path
                  d="M203.822 259.398l-.879 1.745c.634.304 1.28.586 1.934.845.594.211 1.194.403 1.8.576l.507-1.884a26.343 26.343 0 01-1.623-.52 26.331 26.331 0 01-1.739-.762zm-1.242 2.844zm2.129.904z"
                  fill="#f7e8c5" />
               <path
                  d="M202.936 261.139l-.522 1.03c.674.326 1.36.626 2.057.901.632.225 1.272.43 1.918.614l.298-1.116a30.013 30.013 0 01-1.81-.58 29.617 29.617 0 01-1.941-.85zm1.4-2.778l-.522 1.034c.573.276 1.155.531 1.747.765a25.74 25.74 0 001.63.522l.297-1.118a24.459 24.459 0 01-1.521-.488 24.85 24.85 0 01-1.631-.715z"
                  fill="#c3b594" />
               <path
                  d="M208.79 261.027l-.327 1.926a29.08 29.08 0 003.262.276h.691v-1.954h-.691a26.307 26.307 0 01-2.936-.248zm-.354 3.084zm1.763.188z"
                  fill="#f7e8c5" />
               <path
                  d="M208.455 262.953l-.193 1.139c1.148.162 2.304.26 3.463.293h.699v-1.156h-.7a29.083 29.083 0 01-3.269-.276zm.52-3.064l-.194 1.138c.976.138 1.959.22 2.944.248h.699v-1.156h-.7a24.572 24.572 0 01-2.75-.23z"
                  fill="#c3b594" />
               <path d="M214.15 261.275v1.954h3.803v-1.954z" fill="#f7e8c5" />
               <path d="M214.143 263.229v1.156h3.82v-1.156zm0-3.109v1.155h3.82v-1.156z" fill="#c3b594" />
               <path d="M219.69 261.275v1.954h3.802v-1.954z" fill="#f7e8c5" />
               <path d="M219.68 263.229v1.156h3.82v-1.156zm0-3.109v1.155h3.82v-1.156z" fill="#c3b594" />
               <path d="M225.227 261.275v1.954h3.802v-1.954z" fill="#f7e8c5" />
               <path d="M225.219 263.229v1.156h3.818v-1.156zm0-3.109v1.155h3.818v-1.156z" fill="#c3b594" />
               <path d="M230.766 261.275v1.954h3.8v-1.954z" fill="#f7e8c5" />
               <path d="M230.756 263.229v1.156h3.82v-1.156zm0-3.109v1.155h3.82v-1.156z" fill="#c3b594" />
               <path d="M236.303 261.275v1.954h3.802v-1.954z" fill="#f7e8c5" />
               <path d="M236.295 263.229v1.156h3.818v-1.156zm0-3.109v1.155h3.818v-1.156z" fill="#c3b594" />
               <path d="M241.842 261.275v1.954h3.8v-1.954z" fill="#f7e8c5" />
               <path d="M241.832 263.229v1.156h3.82v-1.156zm0-3.109v1.155h3.82v-1.156z" fill="#c3b594" />
               <path d="M247.38 261.275v1.954h3.802v-1.954z" fill="#f7e8c5" />
               <path d="M247.37 263.229v1.156h3.82v-1.156zm0-3.109v1.155h3.82v-1.156z" fill="#c3b594" />
               <path d="M252.916 261.275v1.954h3.803v-1.954z" fill="#f7e8c5" />
               <path d="M252.908 263.229v1.156h3.82v-1.156zm0-3.109v1.155h3.82v-1.156z" fill="#c3b594" />
               <path
                  d="M262.127 261.15c-.642.07-1.286.112-1.932.125h-1.74v1.954h1.74a25.642 25.642 0 002.182-.141zm.078 3.112zm-1.24.09z"
                  fill="#f7e8c5" />
               <path
                  d="M262.387 263.088c-.728.078-1.46.125-2.192.14h-1.75v1.157h1.75a27.343 27.343 0 002.338-.15zm-.401-3.082c-.595.063-1.192.101-1.79.113h-1.75v1.156h1.75a22.407 22.407 0 001.939-.125z"
                  fill="#c3b594" />
               <path
                  d="M267.074 259.623c-.277.138-.557.27-.84.397a22.42 22.42 0 01-2.504.837l.456 1.899a25.46 25.46 0 002.826-.945c.32-.143.636-.294.949-.45zm.112 3.354zm-1.422.507z"
                  fill="#f7e8c5" />
               <path
                  d="M267.97 261.357c-.315.157-.635.31-.958.454a25.46 25.46 0 01-2.834.947l.27 1.125a27.459 27.459 0 003.025-1.012c.344-.154.685-.315 1.023-.482zm-1.413-2.767c-.258.128-.52.253-.784.37-.757.304-1.532.562-2.32.774l.27 1.125c.853-.23 1.691-.51 2.511-.84.285-.127.568-.26.848-.4z"
                  fill="#c3b594" />
               <path
                  d="M271.219 256.516a22.672 22.672 0 01-2.297 1.994c-.145.1-.29.198-.438.295l1.069 1.634c.166-.11.33-.221.494-.335a25.595 25.595 0 002.592-2.25zm2.068 2.312zm-1.328 1.213z"
                  fill="#f7e8c5" />
               <path
                  d="M272.646 257.848a25.598 25.598 0 01-2.6 2.256c-.164.115-.331.228-.5.34l.634.968c.18-.119.356-.24.533-.361a27.54 27.54 0 002.775-2.41zm-2.263-2.129a20.979 20.979 0 01-2.127 1.845c-.135.094-.271.188-.408.278l.63.967c.15-.098.297-.197.444-.3a22.67 22.67 0 002.303-2z"
                  fill="#c3b594" />
               <path
                  d="M274.213 252.238a24.5 24.5 0 01-.899 1.617 24.19 24.19 0 01-1.007 1.416l1.529 1.213c.395-.515.771-1.044 1.129-1.586a27.73 27.73 0 001.006-1.808z"
                  fill="#f7e8c5" />
               <path
                  d="M275.975 253.082a27.51 27.51 0 01-1.01 1.816c-.36.545-.738 1.077-1.135 1.594l.906.72c.422-.55.824-1.115 1.205-1.694.382-.63.74-1.275 1.073-1.932zm-2.799-1.353a22.856 22.856 0 01-.838 1.507c-.297.453-.612.893-.942 1.323l.907.718c.354-.463.691-.936 1.011-1.422a24.5 24.5 0 00.903-1.623z"
                  fill="#c3b594" />
               <path
                  d="M275.705 247.252c-.05.344-.104.689-.168 1.031a24.55 24.55 0 01-.685 2.45l1.832.67a27.3 27.3 0 00.767-2.74c.073-.384.137-.77.192-1.155zm3.01.85l-.055.343c.02-.114.037-.229.055-.343zm-.203 1.087zm-.366 1.393z"
                  fill="#f7e8c5" />
               <path
                  d="M277.645 247.498c-.055.39-.12.778-.194 1.164a27.052 27.052 0 01-.77 2.748l1.087.399a29.14 29.14 0 00.82-2.922c.077-.411.142-.823.201-1.237zm-3.082-.404c-.046.323-.099.645-.159.965a22.873 22.873 0 01-.64 2.283l1.086.396c.272-.806.5-1.625.687-2.455.064-.345.12-.692.17-1.039z"
                  fill="#c3b594" />
               <path
                  d="M277.512 241.697l-1.922.33.025.164c.135 1.02.213 2.044.233 3.07-.001.12-.005.24-.008.36l1.95.06c.005-.134.008-.268.009-.402a30.263 30.263 0 00-.256-3.398zm1.199.262zm.172 1.797z"
                  fill="#f7e8c5" />
               <path
                  d="M278.65 241.494l-1.14.195c.012.063.023.129.033.192.149 1.127.234 2.262.256 3.398-.001.136-.004.273-.008.41l1.156.038c.004-.145.007-.292.008-.438a32.027 32.027 0 00-.271-3.594zm-3.062.526l-1.14.195.025.162c.127.953.2 1.913.218 2.875 0 .113-.005.227-.008.34l1.157.037c.003-.123.007-.245.008-.367a27.43 27.43 0 00-.233-3.07z"
                  fill="#c3b594" />
               <path
                  d="M275.725 236.18l-1.752.863c.332.712.634 1.441.904 2.182.13.394.248.793.36 1.193l1.888-.502a30.248 30.248 0 00-.4-1.32 30.65 30.65 0 00-1-2.416zm2.209 2.425z"
                  fill="#f7e8c5" />
               <path
                  d="M276.758 235.66l-1.037.512c.369.793.704 1.602 1.004 2.424.144.44.278.883.402 1.33l1.117-.297c-.13-.472-.273-.94-.426-1.406a31.968 31.968 0 00-1.06-2.563zm-2.789 1.375l-1.037.512c.312.67.596 1.354.85 2.049.121.372.234.747.34 1.125v.002c.371-.1.744-.197 1.116-.297a27.657 27.657 0 00-.361-1.201 27.185 27.185 0 00-.908-2.19z"
                  fill="#c3b594" />
               <path
                  d="M273.424 230.781zm-1 .608l-1.412 1.351c.33.357.648.725.95 1.106.43.568.834 1.153 1.216 1.754l1.666-1.018a30.302 30.302 0 00-1.346-1.941l-.094-.118a22.78 22.78 0 00-.98-1.134z"
                  fill="#f7e8c5" />
               <path
                  d="M273.252 230.582l-.834.8c.341.37.67.75.986 1.141l.094.118c.476.631.927 1.282 1.352 1.949.329-.202.658-.402.988-.602a32.042 32.042 0 00-1.43-2.06l-.094-.12c-.34-.42-.694-.829-1.062-1.226zm-2.244 2.152l-.834.801c.272.293.533.596.785.906.031.04.064.078.094.118.402.534.783 1.084 1.142 1.648l.987-.602a26.608 26.608 0 00-1.22-1.76 19.793 19.793 0 00-.954-1.11z"
                  fill="#c3b594" />
               <path
                  d="M267.605 228.012l-.79 1.785c.152.068.303.139.455.21.87.468 1.704.998 2.496 1.589l.06.047 1.233-1.512-.069-.057a22.72 22.72 0 00-2.865-1.82 19.815 19.815 0 00-.52-.242z"
                  fill="#f7e8c5" />
               <path
                  d="M268.064 226.95l-.466 1.058c.178.079.352.162.527.246a22.72 22.72 0 012.865 1.82l.076.063.733-.895-.082-.068a24.439 24.439 0 00-3.084-1.96c-.188-.09-.379-.179-.569-.265zm-1.255 2.845l-.467 1.057c.14.063.28.128.42.195.794.425 1.555.909 2.277 1.447l.06.05h.003l.73-.896-.066-.052a19.941 19.941 0 00-2.496-1.588 21.214 21.214 0 00-.461-.213z"
                  fill="#c3b594" />
               <path
                  d="M261.865 226.72l-.052 1.952c.896.053 1.786.169 2.667.344.275.067.55.14.82.218.19-.622.377-1.244.565-1.867a22.635 22.635 0 00-.94-.254 22.66 22.66 0 00-3.06-.392z"
                  fill="#f7e8c5" />
               <path
                  d="M261.887 225.564l-.031 1.157c1.03.06 2.057.192 3.07.392.318.079.635.164.95.256l.335-1.107a25.59 25.59 0 00-1.021-.274 24.472 24.472 0 00-3.303-.424zm-.08 3.108l-.03 1.156c.82.048 1.636.153 2.442.313.253.062.504.13.754.203l.336-1.108c-.274-.08-.552-.152-.829-.22a19.733 19.733 0 00-2.673-.344z"
                  fill="#c3b594" />
               <path d="M256.303 226.701l-.004 1.953 3.802.01.006-1.953z" fill="#f7e8c5" />
               <path d="M256.299 225.545l-.004 1.156 3.82.01.004-1.156zm-.008 3.109l-.004 1.157 3.82.01.002-1.157z"
                  fill="#c3b594" />
               <path d="M250.766 226.688l-.006 1.95 3.802.01.006-1.95z" fill="#f7e8c5" />
               <path d="M250.762 225.531l-.004 1.156 3.818.01.004-1.156zm-.008 3.108l-.006 1.158 3.82.01.004-1.158z"
                  fill="#c3b594" />
               <path d="M245.229 226.672l-.006 1.953 3.802.01.006-1.953z" fill="#f7e8c5" />
               <path d="M245.223 225.516l-.002 1.156 3.818.01.004-1.156zm-.008 3.109l-.002 1.156 3.816.01h.002l.002-1.156z"
                  fill="#c3b594" />
               <path d="M239.69 226.658l-.005 1.951 3.803.01.004-1.95z" fill="#f7e8c5" />
               <path d="M239.686 225.502l-.004 1.156 3.82.01.004-1.156zm-.008 3.108l-.004 1.156 3.818.01.004-1.157z"
                  fill="#c3b594" />
               <path d="M234.152 226.643l-.006 1.953 3.803.01.004-1.953z" fill="#f7e8c5" />
               <path d="M234.146 225.486l-.002 1.157 3.819.01.004-1.157zm-.007 3.11l-.004 1.156 3.82.01.004-1.156z"
                  fill="#c3b594" />
               <path d="M228.613 226.629l-.004 1.951 3.803.012.004-1.953z" fill="#f7e8c5" />
               <path d="M228.61 225.473l-.005 1.156 3.82.01.005-1.156zm-.008 3.107l-.004 1.156 3.82.01.004-1.154z"
                  fill="#c3b594" />
               <path d="M223.076 226.613l-.006 1.953 3.805.01.004-1.953z" fill="#f7e8c5" />
               <path d="M223.07 225.457l-.002 1.156 3.819.01.004-1.154zm-.007 3.109l-.002 1.157 3.818.01.004-1.157z"
                  fill="#c3b594" />
               <path d="M217.537 226.6l-.004 1.95 3.803.01.004-1.95z" fill="#f7e8c5" />
               <path d="M217.533 225.443l-.004 1.157 3.82.01.005-1.157zm-.008 3.107l-.004 1.157 3.82.012.005-1.158z"
                  fill="#c3b594" />
               <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__q)"
                  transform="matrix(13.28 0 0 14.4 202.56 225.12)"
                  href="https://static.igem.wiki/teams/5649/platraimages/img-013-39f69e1b2958.webp" /><text x="144.918"
                     y="125.236">Transformation into</text><text x="144.918" y="141.236">BL21(DE3) cells</text>
               <path
                  d="M179.334 188.637c-8.84 0-16.037 7.25-16.037 16.127 0 8.876 7.196 16.127 16.037 16.127 8.84 0 16.037-7.251 16.037-16.127 0-8.876-7.197-16.127-16.037-16.127zm0 3.924c6.707 0 12.115 5.433 12.115 12.203s-5.408 12.203-12.115 12.203-12.115-5.433-12.115-12.203 5.408-12.203 12.115-12.203z"
                  fill="#171717" />
               <path
                  d="M178.81 188.164c-.58.01-1.163.049-1.751.117l.574 4.934a12.376 12.376 0 0113.576 9.723l-1.111.035 3.841 3.607 3.608-3.842-1.315.041c-1.285-7.966-7.893-13.891-15.697-14.554a17.2 17.2 0 00-1.724-.061z"
                  fill="#cc0a43" />
               <path
                  d="M179.334 153.855c-8.84 0-16.037 7.251-16.037 16.127 0 8.877 7.196 16.127 16.037 16.127 8.84 0 16.037-7.25 16.037-16.127 0-8.876-7.197-16.127-16.037-16.127zm0 3.924c6.707 0 12.115 5.434 12.115 12.203 0 6.77-5.408 12.204-12.115 12.204s-12.115-5.434-12.115-12.204c0-6.77 5.408-12.203 12.115-12.203z"
                  fill="#171717" />
               <path
                  d="M178.81 153.383a17.49 17.49 0 00-1.751.115l.574 4.934a12.376 12.376 0 0113.576 9.722l-1.111.035 3.841 3.608 3.608-3.84-1.315.041c-1.284-7.967-7.892-13.894-15.697-14.557a17.201 17.201 0 00-1.724-.058z"
                  fill="#cc0a43" />
               <path
                  d="M214.111 188.637c-8.84 0-16.037 7.25-16.037 16.127 0 8.876 7.197 16.127 16.037 16.127s16.037-7.251 16.037-16.127c0-8.876-7.196-16.127-16.037-16.127zm0 3.924c6.708 0 12.116 5.433 12.116 12.203s-5.408 12.203-12.116 12.203c-6.707 0-12.115-5.433-12.115-12.203s5.408-12.203 12.115-12.203z"
                  fill="#171717" />
               <path
                  d="M213.588 188.164c-.58.01-1.164.049-1.752.117l.574 4.934c6.432-.75 12.25 3.5 13.576 9.723l-1.11.035 3.84 3.607 3.608-3.842-1.314.041c-1.286-7.966-7.893-13.891-15.697-14.554a17.2 17.2 0 00-1.725-.061z"
                  fill="#cc0a43" />
               <path
                  d="M214.111 153.855c-8.84 0-16.037 7.251-16.037 16.127 0 8.877 7.197 16.127 16.037 16.127s16.037-7.25 16.037-16.127c0-8.876-7.196-16.127-16.037-16.127zm0 3.924c6.708 0 12.116 5.434 12.116 12.203 0 6.77-5.408 12.204-12.116 12.204-6.707 0-12.115-5.434-12.115-12.204 0-6.77 5.408-12.203 12.115-12.203z"
                  fill="#171717" />
               <path
                  d="M213.588 153.383a17.49 17.49 0 00-1.752.115l.574 4.934c6.432-.75 12.25 3.5 13.576 9.722l-1.111.035 3.842 3.608 3.607-3.84-1.314.041c-1.285-7.967-7.893-13.894-15.698-14.557a17.201 17.201 0 00-1.724-.058z"
                  fill="#cc0a43" />
               </g>
            </g>
            <g className="step7">
               <g transform="translate(211.042 -67.862)">
                  <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__r)"
                     transform="matrix(182.08 0 0 128.64 472.32 444.8)"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-023-a162c450ebe2.webp" /><text x="475.843"
                     y="429.33">SDS-Page Gel Electrophoresis</text>
                  <path
                     d="M500.498 512.582v2.55h10.356v-2.55zm-.002 16.398v2.55h10.358v-2.55zm0-32.789v2.551h10.358v-2.55zm.002-16.396v2.55h10.356v-2.55zm-.002 65.575v2.55h10.358v-2.55zm0-76.804v2.55h10.358v-2.55zm.002 88.039v2.55h10.356v-2.55zm27.732-44.392v2.56h10.393v-2.558zm0 32.894v2.561h10.391v-2.559zm0-77.058v2.558h10.391v-2.558zm27.743 60.613v2.56h10.39v-2.56zm0-49.349v2.558h10.39v-2.558zm27.737 16.453v2.56h10.392v-2.558zm0 60.617v2.558h10.392v-2.558zm27.741-44.17v2.558h10.393v-2.558zm0-32.9v2.558h10.393v-2.558zm0 65.794v2.561h10.393v-2.559z"
                     fill="#0c08f3" />
               </g>
            </g>
            <g className="step3">
               <g transform="translate(211.042 -67.862)">
                  <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__s)"
                     transform="matrix(73.44 0 0 136.96 348.16 151.04)"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-014-303763d94ac1.webp" />
                  <image width="1" height="1" preserveAspectRatio="none" mask="url(#prefix__t)"
                     transform="matrix(34.08 0 0 34.24 331.68 154.08)"
                     href="https://static.igem.wiki/teams/5649/platraimages/img-015-c9df814abc28.webp" /><text x="324.483"
                        y="125.236">Overnight culture of</text><text x="324.483" y="141.236">transformed E. coli</text><text
                           fill="#d15472" x="335.932" y="201.163">16h</text>
                  <path
                     d="M348.617 161.242a.425.425 0 00-.402.557v8.404h.79v-8.369a.425.425 0 00-.388-.592zm7.596 9.42a.424.424 0 00-.063.002.424.424 0 00-.203.074h-6.279v.791h6.48v-.01a.424.424 0 00.463-.437.424.424 0 00-.398-.42z" />
               </g>
            </g>
            <path
               d="M504.762 435.658l-15 7.5 15 7.5v-5.998h21.143v-3h-21.143zM633.315 432.66l-15 7.5 15 7.5v-6h21.143v-3h-21.143zM247.176 432.658l-15 7.5 15 7.5v-6h21.141v-3h-21.14zM895.102 429.66l-15 7.5 15 7.5v-6h21.143v-3h-21.143zM1095.204 124.695v3h54.527v303.623h-50.725v-6l-15 7.5 15 7.5v-6h52.225a1.5 1.5 0 001.5-1.5V126.195a1.5 1.5 0 00-1.5-1.5zM845.772 116.1v6H824.63v3h21.143v6l15-7.5zM678.602 113.9v6H657.46v3h21.142v6l15-7.5zM519.426 111.703v6h-21.142v3h21.142v6l15-7.5zM347.184 109.808v6h-21.14v3h21.14v6l15-7.5z" />
         </svg>
      </PopoverInteractive>
   );
};

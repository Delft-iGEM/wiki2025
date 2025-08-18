// src/components/Header.tsx
export type HeaderProps = {
  title?: string;
  lead?: string;
};

export function Header({ title = "", lead = "" }: HeaderProps) {
  const hasTitle = title.trim().length > 0;
  const hasLead = lead.trim().length > 0;
  if (!hasTitle && !hasLead) return null;

  return (
    <header className="bg-hero py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            {hasTitle && (
              <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
            )}
            {hasLead && (
              <p className="lead mb-5 text-white-50">{lead}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

type Entry = {
  label: string;
  value: string;
  tableClass: string;
  badgeClass: string;
  highlight?: boolean;
};

const rowData: Array<{ advantage: string; entries: Entry[] }> = [
  {
    advantage: 'Development',
    entries: [
      {
        label: 'Traditional',
        value: 'Years',
        tableClass: 'redcell',
        badgeClass: 'bg-rose-100 text-rose-700 border border-rose-200',
      },
      {
        label: 'mRNA',
        value: 'Days',
        tableClass: 'greencell',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
      },
      {
        label: 'Snaccine',
        value: 'Days',
        tableClass: 'greencell',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        highlight: true,
      },
    ],
  },
  {
    advantage: 'Infection risk',
    entries: [
      {
        label: 'Traditional',
        value: 'Some',
        tableClass: 'redcell',
        badgeClass: 'bg-rose-100 text-rose-700 border border-rose-200',
      },
      {
        label: 'mRNA',
        value: 'None',
        tableClass: 'greencell',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
      },
      {
        label: 'Snaccine',
        value: 'None',
        tableClass: 'greencell',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        highlight: true,
      },
    ],
  },
  {
    advantage: 'Storage & transport',
    entries: [
      {
        label: 'Traditional',
        value: 'Mostly fridge',
        tableClass: 'orangecell',
        badgeClass: 'bg-amber-100 text-amber-800 border border-amber-200',
      },
      {
        label: 'mRNA',
        value: 'Ultra-cold',
        tableClass: 'redcell',
        badgeClass: 'bg-rose-100 text-rose-700 border border-rose-200',
      },
      {
        label: 'Snaccine',
        value: 'Room temperature',
        tableClass: 'greencell',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        highlight: true,
      },
    ],
  },
  {
    advantage: 'Production cost',
    entries: [
      {
        label: 'Traditional',
        value: 'Some low',
        tableClass: 'orangecell',
        badgeClass: 'bg-amber-100 text-amber-800 border border-amber-200',
      },
      {
        label: 'mRNA',
        value: 'High',
        tableClass: 'redcell',
        badgeClass: 'bg-rose-100 text-rose-700 border border-rose-200',
      },
      {
        label: 'Snaccine',
        value: 'Low',
        tableClass: 'greencell',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        highlight: true,
      },
    ],
  },
  {
    advantage: 'Administration',
    entries: [
      {
        label: 'Traditional',
        value: 'Some oral',
        tableClass: 'orangecell',
        badgeClass: 'bg-amber-100 text-amber-800 border border-amber-200',
      },
      {
        label: 'mRNA',
        value: 'Injection',
        tableClass: 'redcell',
        badgeClass: 'bg-rose-100 text-rose-700 border border-rose-200',
      },
      {
        label: 'Snaccine',
        value: 'Oral, at home',
        tableClass: 'greencell',
        badgeClass: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
        highlight: true,
      },
    ],
  },
];

const ComparisonTable: React.FC = () => {
  return (
    <>
      <div className="sm:hidden w-full flex justify-center" id='mobiletabtable'>
        {/* Mobile: stack entries as full-width tabs for easier tapping */}
        <div className="space-y-4">
          {rowData.map((row) => (
            <div
              key={row.advantage}
              className="rounded-xl border border-primary/20 bg-white px-10 py-4 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">{row.advantage}</h3>
              <dl className="mt-4 flex flex-col w-full items-center gap-3 text-xs min-[360px]:text-sm min-[420px]:text-base">
                {row.entries.map((entry) => (
                  <div
                    key={`${row.advantage}-${entry.label}`}
                    className="flex w-full flex-col items-center gap-2"
                  >
                    <dt
                      className={`w-full text-center font-medium ${
                        entry.highlight ? 'text-primary font-semibold' : 'text-slate-700'
                      }`}
                    >
                      {entry.label}
                    </dt>
                    <dd className="w-full">
                      <span
                        className={`flex w-full items-center justify-center rounded-lg px-4 py-2 text-xs min-[360px]:text-sm min-[420px]:text-base font-semibold uppercase tracking-wide ${entry.badgeClass}`}
                      >
                        {entry.value}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block overflow-x-auto">
        {/* Desktop: Keep compact table presentation */}
        <table className="comparison-table min-w-full">
          <thead>
            <tr className="header">
              <th className="toprowcell text-xs sm:text-sm md:text-xl font-bold text-left">advantages</th>
              <th className="toprowcell text-xs sm:text-sm md:text-base">traditional</th>
              <th className="toprowcell text-xs sm:text-sm md:text-base">mRNA</th>
              <th className="toprowcell text-xs sm:text-sm md:text-xl text-primary font-bold">snaccine</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row) => (
              <tr key={row.advantage}>
                <td className="advantagecell text-xs sm:text-sm md:text-base">{row.advantage}</td>
                {row.entries.map((entry) => (
                  <td
                    key={`${row.advantage}-${entry.label}`}
                    className={`${entry.tableClass} text-xs sm:text-sm md:text-base`}
                  >
                    {entry.value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComparisonTable;
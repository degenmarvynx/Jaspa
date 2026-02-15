 'use client';
 import React, { useMemo, useState } from 'react';
 
 type StateKey =
   | 'Abia' | 'Adamawa' | 'Akwa Ibom' | 'Anambra' | 'Bauchi' | 'Bayelsa' | 'Benue' | 'Borno'
  | 'Cross River' | 'Delta' | 'Ebonyi' | 'Edo' | 'Ekiti' | 'Enugu' | 'FCT' | 'Gombe' | 'Imo'
   | 'Jigawa' | 'Kaduna' | 'Kano' | 'Katsina' | 'Kebbi' | 'Kogi' | 'Kwara' | 'Lagos'
  | 'Nasarawa' | 'Niger' | 'Ogun' | 'Ondo' | 'Osun' | 'Oyo' | 'Plateau' | 'Rivers' | 'Sokoto'
   | 'Taraba' | 'Yobe' | 'Zamfara' | 'FCT';
 
const STATES_BASE: StateKey[] = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno',
  'Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT','Gombe','Imo',
  'Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos',
  'Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto',
  'Taraba','Yobe','Zamfara'
];

const STATES: StateKey[] = [...STATES_BASE].sort((a, b) => a.localeCompare(b)) as StateKey[];
 
 const BRANCH_STATES = new Set<StateKey>([
   'Abia','Adamawa','Akwa Ibom','Anambra','Cross River','Delta','Ebonyi','Edo',
   'Enugu','Imo','Lagos','Ogun','Oyo','Rivers','FCT'
 ]);
 
 export default function BranchLocator() {
   const [selected, setSelected] = useState<StateKey | ''>('');
 
   const hasBranch = useMemo(() => selected && BRANCH_STATES.has(selected as StateKey), [selected]);
 
   const message = useMemo(() => {
    if (!selected) return 'See a Jaspa branch location near you';
     if (hasBranch) {
       const state = selected as string;
       return `This is the current location of Jaspa Microfinance Bank in ${state}${state === 'FCT' ? '' : ' State'}, Nigeria.`;
     }
     return `Sorry, there is currently no Jaspa MFB branch within your selected state, but rest assured that we’re coming over soon.`;
   }, [selected, hasBranch]);
 
   return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
      <div>
        <label htmlFor="state-select" className="block text-[#012e6d] text-[14px] font-extrabold">Select your State</label>
        <div className="mt-2 relative">
          <select
            id="state-select"
            className={`appearance-none w-full md:w-[300px] h-[56px] md:h-[70px] rounded-[8px] border-2 border-[#044ea4] px-4 md:px-6 pr-10 md:pr-12 text-[#012e6d] text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[28px] ${selected ? 'bg-[#87b6ed]' : 'bg-white'} focus:outline-none focus:ring-2 focus:ring-[#044ea4]`}
            aria-label="Select your state"
            value={selected}
            onChange={(e) => setSelected(e.target.value as StateKey)}
          >
            <option value="">Choose one</option>
            {STATES.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#012e6d]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 10l5 5 5-5" stroke="#012e6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
      <div>
        <label className="block text-[#012e6d] text-[14px] font-extrabold">Jaspa Branch Locations</label>
        <div className={`mt-2 border-2 border-[#044ea4] rounded-[8px] min-h-[56px] md:min-h-[70px] w-full flex items-start px-4 md:px-6 py-3 overflow-hidden ${selected ? 'bg-[#87b6ed]' : 'bg-white'}`}>
          <div className="text-[#012e6d] text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[28px] break-words whitespace-normal">
            {message}
          </div>
        </div>
      </div>
    </div>
   );
 }

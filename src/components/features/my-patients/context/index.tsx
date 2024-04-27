import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

type SortType = 'ASC' | 'DESC';

interface IMyPatientsCtx {
  total: number;
  sortBy: SortType;
  searchTerm: string;

  setSortBy: (sortBy: SortType) => void;
  setTotal: (total: number) => void;
  setSearchTerm: (term: string) => void;
}

const MyPatientsCtx = createContext<IMyPatientsCtx>({
  sortBy: 'ASC',
  total: 0,
  searchTerm: '',
  setTotal() {},
  setSortBy() {},
  setSearchTerm() {},
});

const MyPatientsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [sortBy, setSortBy] = useState<SortType>('ASC');
  const [searchTerm, setSearchTerm] = useState('');

  const ctxValue = {
    total,
    sortBy,
    searchTerm,
    setTotal,
    setSortBy,
    setSearchTerm,
  };

  return <MyPatientsCtx.Provider value={ctxValue}>{children}</MyPatientsCtx.Provider>;
};

const useMyPatientContext = () => {
  const ctx = useContext(MyPatientsCtx);
  if (!ctx) {
    throw new Error();
  }
  return ctx;
};

export { MyPatientsProvider, useMyPatientContext };
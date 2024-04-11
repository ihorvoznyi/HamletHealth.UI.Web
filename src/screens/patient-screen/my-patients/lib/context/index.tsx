import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

type SortType = 'ASC' | 'DESC';

interface IMyPatientsCtx {
  sortBy: SortType;
  searchTerm: string;

  setSearchTerm: (term: string) => void;
  setSortBy: (sortBy: SortType) => void;
}

const MyPatientsCtx = createContext<IMyPatientsCtx>({
  sortBy: 'ASC',
  searchTerm: '',
  setSortBy() {},
  setSearchTerm() {},
});

const MyPatientsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [sortBy, setSortBy] = useState<SortType>('ASC');
  const [searchTerm, setSearchTerm] = useState('');

  const ctxValue = {
    sortBy,
    searchTerm,
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
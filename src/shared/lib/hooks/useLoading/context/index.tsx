import { FC, PropsWithChildren, createContext, useState } from 'react';

interface PropsType {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const LoadingContext = createContext<PropsType>({
  loading: false,
  setLoading: () => {},
});

export const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <div className="absolute left-0 top-0 bottom-0 right-0 bg-black z-[9999999]">
          {children}
        </div>
      ) : children}
    </LoadingContext.Provider>
  );
};
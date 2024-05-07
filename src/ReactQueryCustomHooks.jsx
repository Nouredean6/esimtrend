import {
    useQuery,
    useMutation,
    useQueryClient,
  } from 'react-query'
import fetchAPI from './utils';

  export const useFetchCountries = () => {
    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['countries'],
      queryFn: async () => {
        const { data } = await fetchAPI.get('/AvailableCountries');
        return data;
      },
    });
    return { isLoading, isError, data, error };
  };

  export const useFetchRegions = () => {
    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['regions'],
      queryFn: async () => {
        const { data } = await fetchAPI.get('/AvailableRegions');
        return data;
      },
    });
    return { isLoading, isError, data, error };
  };
// reactQueryCustomHooks.jsx
export const useFetchTest = (countryCode) => {
    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['countryBundles', countryCode],
      queryFn: async () => {
        const { data } = await fetchAPI.get(`/Bundles?country_code=${countryCode}&bundle_category=country`);
        return data;
      },
    });
    return { isLoading, isError, data, error };
  };

  export const useFetchAnyCountry = (countryCode) => {
    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['countryBundles', countryCode],
      queryFn: async () => {
        const { data } = await fetchAPI.get(`/Bundles?country_code=${countryCode}`);
        return data;
      },
    });
    const anyCountIsLoading = isLoading;
    const anyCountIsError= isError;
    const anyCountData = data;
    const anyCountError = error
    return { anyCountIsLoading, anyCountIsError,anyCountData, anyCountError };
  };  


  export const useFetchGlobal = (countryCode) => {
    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['globalBundles'],
      queryFn: async () => {
        const { data } = await fetchAPI.get('/Bundles?bundle_category=global');
        return data;
      },
    });
    return { isLoading, isError, data, error };
  };
  
  
  export const useFetchRegionBundle = (regionCode) => {
    const { isLoading, data, isError, error } = useQuery({
      queryKey: ['regionBundles', regionCode],
      queryFn: async () => {
        const { data } = await fetchAPI.get(`/Bundles?region_code=${regionCode}`);
        return data;
      },
    });
    return { isLoading, isError, data, error };
  };

import '@testing-library/jest-dom'; //adds assertion methods on dom elements like 'toBeInTheDocument'
import createFetchMock from 'vitest-fetch-mock';
import { vi } from 'vitest';

const fetchMocker = createFetchMock(vi);
// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMocker.enableMocks();

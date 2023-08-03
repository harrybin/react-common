import { useFetch, createCommonHeaders } from './fetchCommands';
import { BaseEntity } from './BaseEntity';
import { renderHook } from '@testing-library/react';
import 'vitest-fetch-mock';

vi.mock('./OidcBarerProxyProvider', () => ({
    useOidcBaerer: () => 'mockOidcBaerer',
}));

describe('testUseFetch', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('loadDataAsync should make a fetch GET request', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ data: 'test' }));

        const { result } = renderHook(() => useFetch<BaseEntity>());
        const data = await result.current.loadDataAsync({
            queryString: 'testurl',
            setIsLoadingCallback: vi.fn(),
            lastQuery: '',
        });
        expect(fetchMock).toBeCalledWith('testurl', {
            method: 'GET',
            headers: createCommonHeaders(undefined, 'mockOidcBaerer'),
            cache: 'no-store',
        });
        expect(data).toEqual({ data: 'test' });
    });

    it('updateDataAsync should make a fetch PUT request', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ data: 'test' }));

        const { result } = renderHook(() => useFetch<BaseEntity>());
        const data = await result.current.updateDataAsync({
            queryString: 'testurl',
            setIsLoadingCallback: vi.fn(),
            data: { optLock: 1, id: '1' },
        });

        expect(fetchMock).toBeCalledWith('testurl', {
            method: 'PUT',
            headers: createCommonHeaders('1', 'mockOidcBaerer'),
            body: JSON.stringify({ optLock: 1, id: '1' }),
        });

        expect(data).toEqual({ data: 'test' });
    });

    it('loadStaticDataAsync should make a fetch GET request', async () => {
        // Mock successful response
        fetchMock.mockResponseOnce(JSON.stringify({ data: 'test' }));

        const { result } = renderHook(() => useFetch<BaseEntity>());
        const data = await result.current.loadStaticDataAsync({
            queryString: 'testurl',
        });

        expect(fetchMock).toBeCalledWith('testurl', {
            method: 'GET',
            headers: createCommonHeaders(undefined, 'mockOidcBaerer'),
            cache: 'no-store',
        });

        expect(data).toEqual({ data: 'test' });
    });
});

describe('testCreateCommonHeaders', () => {
    it('should return headers with Content-Type only', () => {
        const headers = createCommonHeaders();
        expect(headers.get('Content-Type')).toBe('application/json');
        expect(headers.get('Authorization')).toBeNull();
        expect(headers.get('If-Match')).toBeNull();
    });

    it('should return headers with Content-Type and Authorization', () => {
        const headers = createCommonHeaders(undefined, '12345');
        expect(headers.get('Content-Type')).toBe('application/json');
        expect(headers.get('Authorization')).toBe('Bearer 12345');
        expect(headers.get('If-Match')).toBeNull();
    });

    it('should return headers with Content-Type and If-Match', () => {
        const headers = createCommonHeaders('12345');
        expect(headers.get('Content-Type')).toBe('application/json');
        expect(headers.get('Authorization')).toBeNull();
        expect(headers.get('If-Match')).toBe('"12345"');
    });

    it('should return headers with Content-Type, Authorization and If-Match', () => {
        const headers = createCommonHeaders('12345', '67890');
        expect(headers.get('Content-Type')).toBe('application/json');
        expect(headers.get('Authorization')).toBe('Bearer 67890');
        expect(headers.get('If-Match')).toBe('"12345"');
    });
});

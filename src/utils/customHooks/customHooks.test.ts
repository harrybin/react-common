import { usePersistedRef } from './customHooks';
import { renderHook, waitFor } from '@testing-library/react';

describe('usePersistedRef', () => {
    const defaultValue = 'defaultValue';
    const newValue = 'newValue';
    it('should have the default value', async () => {
        const { result } = renderHook(() => usePersistedRef<string>('key', defaultValue));

        const [value, setValue] = result.current;
        expect(value).toEqual(defaultValue);

        const localStoreVal = JSON.parse(localStorage.getItem('key') || '');
        expect(localStoreVal).toEqual(defaultValue);
    });

    it('should have the new value', async () => {
        const { result } = renderHook(() => {
            const [_, setValue] = usePersistedRef<string>('key', defaultValue);
            setValue(newValue);
            return usePersistedRef<string>('key', defaultValue);
        });

        await waitFor(() => {
            const [value] = result.current;
            expect(value).toEqual(newValue);
        });
    });
});

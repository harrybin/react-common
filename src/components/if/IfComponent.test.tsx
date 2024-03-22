import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import { If } from './IfComponent';

const testobj = {sub1: [], sub2:undefined};

test.each([true, {}, 1, [], testobj.sub1, " "])('renders the If components children', async (condValue) => {
    // Act
    render(<If cond={condValue} else={'if-else'}>if-test</If>);

    // Assert
    expect(await screen.findByText('if-test')).toBeInTheDocument();
});

test.each([false, undefined, 0, null, testobj.sub2, ""])('should NOT render the If components children --> else', async (condValue) => {
    // Act
    render(
        <If cond={condValue} else={'if-else'}>
            if-test
        </If>
    );

    // Assert
    expect(await screen.findByText('if-else')).toBeInTheDocument();
});

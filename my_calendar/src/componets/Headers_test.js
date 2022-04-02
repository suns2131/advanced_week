import React from 'react';
import {render} from '@testing-library/react'
import Header from './headers'

describe("Text view test", () => {
    it("renders header text", () => {
      const { getByText } = render(<Header />);
      const header = getByText("2022-04");
      expect(header).toBeInTheDocument();
    });
  });

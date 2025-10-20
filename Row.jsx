import React from 'react';

/**
 * @param {{ id: string }[]} arrayOfRecords
 * @param {string} fooKind
 * @returns {React.ReactNode}
 */
export const Row = ({ arrayOfRecords = [], fooKind }) => {
  const xCount = 10;
  const isFoo = fooKind === 'foo';

  const columns = [{ field: 'baz', value: 'Bar' }];

  /**
   * @param {{ field: string, value: string }[]} builtColumns
   * @returns {React.ReactNode}
   */
  const buildColumnsHelper = builtColumns => {
    return builtColumns.map(column => {
      switch (true) {
        case column.field === 'qux' && xCount > 1: {
          return <td key="foo">Foo</td>;
        }
        case column.field === 'barbaz' && isFoo: {
          return <td key="bar">Foobar</td>;
        }
        case column.field === 'baz': {
          return arrayOfRecords.map(record => <td key={record.id}>{record.id}</td>);
        }
        default: {
          return <td>Bar</td>;
        }
      }
    });
  };

  return <tr>{buildColumnsHelper(columns)}</tr>;
};


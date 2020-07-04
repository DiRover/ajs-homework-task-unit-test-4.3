import fetchData from '../http';
import { getLevel } from '../level';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should show level 1', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

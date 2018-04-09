import { Components } from '../components/index';
import { Services } from '../services/index';
import DATA_MOCK from '../mockData/articlesMock';

describe('Service: Pagination Service', () => {
  beforeEach(angular.mock.module(Components, Services));
  let PaginationService;

  beforeEach(inject((_PaginationService_) => {
    PaginationService = _PaginationService_;
  }));

  it('getPager with valid data', () => {
    const totalItems = DATA_MOCK.length;
    const activePage = 3;
    const expectedResult = {
      currentPage: 3,
      endIndex: 8,
      endPage: 5,
      pageSize: 3,
      startIndex: 6,
      startPage: 1,
      totalItems: 13,
      totalPages: 5
    };
    const pager = PaginationService.getPager(totalItems, activePage);
    expect(pager).toEqual(expectedResult);
  });


  it('getPager with invalid data', () => {
    const totalItems = DATA_MOCK.length;
    const activePage = 20;
    const expectedResult = null;
    const pager = PaginationService.getPager(totalItems, activePage);
    expect(pager).toEqual(expectedResult);
  });


});
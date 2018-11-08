/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopingListService } from './shoping-list.service';

describe('Service: ShopingList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopingListService]
    });
  });

  it('should ...', inject([ShopingListService], (service: ShopingListService) => {
    expect(service).toBeTruthy();
  }));
});

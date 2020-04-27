import { TestBed } from '@angular/core/testing';
import { ServicesService } from './services.service';
describe('ServicesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ServicesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=services.service.spec.js.map
// import Product from '../shared/models/product';
// import {CollectionViewer, DataSource} from '@angular/cdk/collections';



// export class ProductDataSource implements DataSource<Product> {

//     private lessonsSubject = new BehaviorSubject<Lesson[]>([]);
//     private loadingSubject = new BehaviorSubject<boolean>(false);

//     public loading$ = this.loadingSubject.asObservable();

//     constructor(private coursesService: CoursesService) {}

//     connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
//         return this.lessonsSubject.asObservable();
//     }

//     disconnect(collectionViewer: CollectionViewer): void {
//         this.lessonsSubject.complete();
//         this.loadingSubject.complete();
//     }

//     loadLessons(courseId: number, filter = '',
//                 sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

//         this.loadingSubject.next(true);

//         this.coursesService.findLessons(courseId, filter, sortDirection,
//             pageIndex, pageSize).pipe(
//             catchError(() => of([])),
//             finalize(() => this.loadingSubject.next(false))
//         )
//         .subscribe(lessons => this.lessonsSubject.next(lessons));
//     }    
// }

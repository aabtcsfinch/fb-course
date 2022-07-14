import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from "../model/course";
import { convertSnaps } from "./afs-utils";

@Injectable({
    providedIn: "root"
})
export class CoursesService {

    constructor(private afs: AngularFirestore){

    }

    loadCoursesByCategory(category: string) : Observable<Course[]>{
       return  this.afs.collection("courses",
        query => query.where("categories", "array-contains", category)
                .orderBy("seqNo")
        )
        .get()
        .pipe(
            map(result => convertSnaps<Course>(result))
        );
    }

}
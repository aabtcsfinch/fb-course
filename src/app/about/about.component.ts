import {Component, OnInit} from '@angular/core';


import 'firebase/firestore';

import {AngularFirestore} from '@angular/fire/firestore';
import {COURSES, findLessonsForCourse} from './db-data';



@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor(private afs: AngularFirestore) {
    }

    async uploadData() {
        const coursesCollection = this.afs.collection('courses');
        const courses = await this.afs.collection('courses').get();
        for (let course of Object.values(COURSES)) {
            const newCourse = this.removeId(course);
            const courseRef = await coursesCollection.add(newCourse);
            const lessons = await courseRef.collection('lessons');
            const courseLessons = findLessonsForCourse(course['id']);
            console.log(`Uploading course ${course['description']}`);
            for (const lesson of courseLessons) {
                const newLesson = this.removeId(lesson);
                delete newLesson.courseId;
                await lessons.add(newLesson);
            }
        }
    }

    removeId(data: any) {
        const newData: any = {...data};
        delete newData.id;
        return newData;
    }

     onReadDoc() {
        this.afs.doc("/courses/2x2ABjcxMrUeuEggJHEQ").valueChanges()
            .subscribe(course => {
               console.log(course);
            });
    }

    async onReadCollection() {
        this.afs.collection("courses", query => query.where("seqNo", "<=", 20).where("url", "==", "angular-forms-course").orderBy("seqNo")).get()
            .subscribe(snaps => {
                snaps.forEach(snap => {
                    console.log(snap.id);
                    console.log(snap.data());
                });
            });  
    }

    onReadCollectionGroup() {

        this.afs.collectionGroup("lessons",
            ref => ref.where("seqNo", "==", 1) )
            .get()
            .subscribe(snaps => {
  
                snaps.forEach(snap => {
  
                    console.log(snap.id);
                    console.log(snap.data());
                })
            });
      }
}

















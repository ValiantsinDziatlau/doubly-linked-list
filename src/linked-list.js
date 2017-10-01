const Node = require('./node');

class LinkedList {
    constructor() {

    this.Arr=[];
    this.length=this.Arr.length;

}
    append(data) {
        var prev=null;
        var CrrntElemVal=this.Arr.length;
        if(CrrntElemVal>0){
        this.Arr[CrrntElemVal-1].next=data;
        prev= (this.Arr[CrrntElemVal-1].data);
        }
        this.Arr[CrrntElemVal]= new Node(data,prev,null);




}
    head() {
        if(this.Arr.length>0){
        for(var i=0; i<this.Arr.length; i++){
           if (this.Arr[i].prev==null)
           return this.Arr[i].data;
        }
        }
        else return null;
    }

    tail() {
        if(this.Arr.length>0){
    for(var i=0; i<this.Arr.length; i++){
           if (this.Arr[i].next==null)
           return this.Arr[i].data;
        }
        }
        else return null;
}

    at(index) {
        return this.Arr[index].data;

    }

    insertAt(index, data) {
        var prev=null;
        var next=null;
        var CrrntElemVal=this.Arr.length;
        if(index>0&&index<CrrntElemVal-1){
        this.Arr[index-1].next=data;
        this.Arr[index].prev=data;
        prev= this.Arr[index-1].data;
        next= this.Arr[index].data;
        }
        if(index==0&&index<CrrntElemVal-1){

        this.Arr[index].prev=data;

        next= this.Arr[index].data;
        }
        if(index>0&&index==CrrntElemVal-1){
        this.Arr[index-1].next=data;
        this.Arr[index].prev=data;
        prev= this.Arr[index-1].data;

        }


        var a = new Node(data,prev,next);
        this.Arr.splice(index,0,a);


    }

    isEmpty() {
      if (this.Arr.length==0){
          return true;
      }
      else return false;


    }

    clear() {
        var CrrntElemVal=this.Arr.length;
        this.Arr.splice(0,CrrntElemVal);
        }

    deleteAt(index) {
        var prev=null;
        var next=null;
        var CrrntElemVal=this.Arr.length;
        if(index>0&&index<CrrntElemVal-1){
        this.Arr[index-1].next=this.Arr[index+1].data;
        this.Arr[index+1].prev=this.Arr[index-1].data;
        }
        if(index==0&&CrrntElemVal-1){
        this.Arr[index+1].prev=prev;
        }
        if(index>0&&index==CrrntElemVal-1){
        this.Arr[index-1].next=next;
        }
        this.Arr.splice(index,1);
    }

    reverse() {}

    indexOf(data) {
        if(this.Arr.length>0){
    for(var i=0; i<this.Arr.length; i++){
           if (this.Arr[i].data==data){
           return i;
           }
           }
        if(i==this.Arr.length){
               return -1;
        }

        }
}

}

module.exports = LinkedList;

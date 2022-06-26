
interface ObjParams{
  speed:number,
  el:HTMLSpanElement
}
class Types{
  private speed:number;
  private el:HTMLSpanElement;
  private data_set:DOMStringMap;
  private dataset_value:string;
  private counter:number = 0;
  private counterTwo:number = 0;
  private loop_all:number=0;
  constructor(obj:ObjParams){
    this.speed = obj.speed;
    this.el = obj.el
    this.data_set = obj.el.dataset 
    this.dataset_value = this.data_set.words as string
    this.loopAll()
  }
  public loopAll(){
    let val  = this.getDataSet();
    this.counter = val.length
    this.loop_all = setInterval(()=>{
      this.counterTwo>=this.counter?this.counterTwo=0:0
      this.el.innerHTML = val[this.counterTwo]
      this.counterTwo++;
    },1000)
    console.log(this.getDataSet())
  }

  public getDataSet():Array<any>{
    return this.dataset_value.split(',').map(function (word) {
      return word.split(" ")
    })
  }
}

/* const words = document.querySelector("#words");
let small_words = words.dataset.words.split(',').map(function (word) {
    return word.split(" ")
  })
  let conuter = small_words.length
  let counterTwo =0
  setInterval(function(){
      counterTwo>=conuter?counterTwo=0:0
    words.innerHTML=small_words[counterTwo]
    counterTwo++
  },1000) */
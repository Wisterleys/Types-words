
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
    let real_speed = this.speed*1000 //Transformando milesegundos em segundos
    let val  = this.getDataSet();
    this.counter = val.length
    this.loop_all = setInterval(()=>{
      this.counterTwo>=this.counter?this.counterTwo=0:0
      this.el.innerHTML = val[this.counterTwo]
      this.counterTwo++;
    },real_speed)
    console.log(this.getDataSet())
  }

  public getDataSet():Array<any>{
    return this.dataset_value.split(',').map(function (word) {
      return word.split(" ")
    })
  }
}
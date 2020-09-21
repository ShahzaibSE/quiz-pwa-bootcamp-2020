export const shuffleArray = (arr: any[]) => 
    [...arr].sort( () => (Math.random() - 0.5))

export const removeDuplicates = ( arr: any, prop: any ) => {
    let obj: any = {};
    // console.log("Original array")
    // console.log(arr)
    return Object.keys(arr.reduce((prev: any, next: any) => {
      // if(!obj[next[prop]]) obj[next[prop]] = next; // When you want first item among copies.
      if(!obj[prev[prop]]) obj[next[prop]] = next;
      return obj;
    }, obj)).map((i) => obj[i]);
}
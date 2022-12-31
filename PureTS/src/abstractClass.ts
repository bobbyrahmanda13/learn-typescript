abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void
  getReelTime(): number {
    //some complex calculation
    return 9
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter)
  }
  getSepia(): void {
    console.log("Sepia")
  }
}
const manda = new Instagram("test", "Test", 3)
manda.getReelTime()
export {}

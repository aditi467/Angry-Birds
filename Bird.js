class Bird{
    constructor (x,y){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' :   1.0
            
        }
        this.width= 50
        this.height = 50
        this.body = Bodies.rectangle (x,y,this.width,this.height,options)
        World.add (world,this.body)

    
    
    } 
    display (){
       var posx= mouseX
       var posy = mouseY
       var angle = this.body.angle

       push ()
       translate (posx , posy)
       rotate (angle)
       rectMode (CENTER)
       fill ("red")
       rect (0,0,this.width,this.height)
       pop ()
    }
    
    
    
    }
import React, {Component} from 'react';
import './circuit.css';

export default class Circuit extends Component {
    constructor(props){
        super(props);
        this.canvasState = {
            canvas: '',
            ctx: '',
            paths: [],
            //blue circle variables with starting path and point (the location, or x and y, is updated when circles are created)
            blueCircles: [],
            speed: 1,
            // Radius of the white glow.
            innerRadius: 1,
            outerRadius: 15,
            // Radius of the whole circle.
            radius: 60,
            state: '',
            lastProps: '',
            headerHeight: '',
            contentHeight: '',
            bodyWidth: ''
        }
        this.animation = this.animation.bind(this);
        this.setupComponent = this.setupComponent.bind(this);
        this.resetCircle = this.resetCircle.bind(this);
        this.updateCircles = this.updateCircles.bind(this);
        this.renderLines = this.renderLines.bind(this);
        this.sizeWindow = this.sizeWindow.bind(this);
        this.setFull = this.setFull.bind(this);
        this.setTabletLarge = this.setTabletLarge.bind(this);
        this.setTabletSmall = this.setTabletSmall.bind(this);
        this.setMobile = this.setMobile.bind(this);
    }

    /** @function animation
      * description: loop that renders the "circuits" (lines and circles) and "sparks" (blue circles) on the page
      */
    animation(){
        this.canvasState.ctx.clearRect(0, 0, this.canvasState.canvas.width, this.canvasState.canvas.height);
        this.renderLines();
        this.updateCircles();
        requestAnimationFrame(this.animation);
    }

    /** @function setupComponent
      * description: initial setup when a page is loaded
      */
    setupComponent(){
        this.sizeWindow();
        this.animation();
    }

    /** @function resetCircle
      * description: figures out where the 'spark' (blue circle) is to travel on it's new path andmoves it to the beginning of that path
      * @param int circle - "spark" (blue circle) number to have it's location and path reset when it reaches the end of it's current path
      */
    resetCircle(circle){
        var num;
        switch(this.canvasState.state){
            case 'full':
                switch(circle) {
                    case 0:
                        num = Math.floor(Math.random() * 3);
                        break;
                    case 1:
                        num = Math.floor(Math.random() * 3) +3;
                        break;
                    case 2:
                        num = Math.floor(Math.random() * 4) +6;
                        break;
                    default:
                        num = Math.floor(Math.random() * 10);
                  }
                break;
            case 'full-alternate':
            case 'tablet-large':
            case 'tablet-small':
            case 'mobile':
                switch(circle) {
                    case 0:
                        num = Math.floor(Math.random() * 3);
                        break;
                    case 1:
                        num = Math.floor(Math.random() * 2) +3;
                        break;
                    default:
                        num = Math.floor(Math.random() * 5);
                  }
                break;
            default:

        }
        this.canvasState.blueCircles[circle].path = num;
        this.canvasState.blueCircles[circle].point = 0;
    }

    /** @function updateCircles
      * description: updates all of the "sparks" (blue circles) so that they move along their paths
      */
    updateCircles(){
        for(var i = 0; i < this.canvasState.blueCircles.length; i++){
            //finds the direction and distance of movement in the x direction
            var dx = this.canvasState.paths[this.canvasState.blueCircles[i].path][(this.canvasState.blueCircles[i].point)+1].x-this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].x;

            //finds the direction and distance of movement in the y direction
            var dy = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].y-this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].y;

            //finds the direction in relation to both x and y
            var direction = Math.atan(dy / dx);

            //if this blue circle is moving positive x or in a y dirrection [and] it is past or at its next point x [and] it is past or at its next point y
            if(dx >= 0 && this.canvasState.blueCircles[i].x >= this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].x && this.canvasState.blueCircles[i].y >= this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].y){
                //advance the blue circle to its next point
                this.canvasState.blueCircles[i].point += 1;

                //if the blue circle is at its last point, reset it to a new path
                if(this.canvasState.blueCircles[i].point >= this.canvasState.paths[this.canvasState.blueCircles[i].path].length-1){
                    this.resetCircle(i);
                }

                //set the blue circle to its point's location, this is to avoid rounding errors
                this.canvasState.blueCircles[i].x = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].x;
                this.canvasState.blueCircles[i].y = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].y;

                //re-finds the direction and distance of movement in the x direction
                dx = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].x-this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].x;

                //re-finds the direction and distance of movement in the y direction
                dy = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].y-this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].y;

                //re-finds the direction in relation to both x and y
                direction = Math.atan(dy / dx);
            }
            //if this blue circle is moving negative x [and] it is past or at its next point x [and] it is past or at its next point y
            if(dx < 0 && this.canvasState.blueCircles[i].x <= this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].x && this.canvasState.blueCircles[i].y >= this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].y){
                //advance the blue circle to its next point
                this.canvasState.blueCircles[i].point += 1;

                //if the blue circle is at its last point, reset it to a new path
                if(this.canvasState.blueCircles[i].point >= this.canvasState.paths[this.canvasState.blueCircles[i].path].length-1){
                    this.resetCircle(i);
                }

                //set the blue circle to its point's location, this is to avoid rounding errors
                this.canvasState.blueCircles[i].x = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].x;
                this.canvasState.blueCircles[i].y = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].y;

                //re-finds the direction and distance of movement in the x direction
                dx = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].x-this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].x;

                //re-finds the direction and distance of movement in the y direction
                dy = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point+1].y-this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].y;

                //re-finds the direction in relation to both x and y
                direction = Math.atan(dy / dx);
            }

            if(dx >= 0){
                //moves the blue circle in realation to the speed and direction
                this.canvasState.blueCircles[i].x += this.canvasState.speed * Math.cos(direction);
                this.canvasState.blueCircles[i].y += this.canvasState.speed * Math.sin(direction);
            }
            else{
                //moves the blue circle in realation to the speed and direction
                this.canvasState.blueCircles[i].x -= this.canvasState.speed * Math.cos(direction);
                this.canvasState.blueCircles[i].y -= this.canvasState.speed * Math.sin(direction);
            }

            //draws the blue circle
            this.canvasState.ctx.beginPath();
            this.canvasState.ctx.lineWidth = 0;
            var gradient = this.canvasState.ctx.createRadialGradient(this.canvasState.blueCircles[i].x, this.canvasState.blueCircles[i].y, this.canvasState.innerRadius, this.canvasState.blueCircles[i].x, this.canvasState.blueCircles[i].y, this.canvasState.outerRadius);
            gradient.addColorStop(0, '#27a9e1');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
            this.canvasState.ctx.moveTo(this.canvasState.blueCircles[i].x, this.canvasState.blueCircles[i].y);
            this.canvasState.ctx.arc(this.canvasState.blueCircles[i].x, this.canvasState.blueCircles[i].y, this.canvasState.radius, 0, 2 * Math.PI);
            this.canvasState.ctx.fillStyle = gradient;
            this.canvasState.ctx.fill();
        }
    }

    /** @function renderLines
      * description: draws the "circuits" (lines and circles) onto the page
      */
    renderLines(){
        this.canvasState.ctx.strokeStyle = '#DDDDDD';
        this.canvasState.ctx.lineWidth = 6;
        this.canvasState.ctx.fillStyle="#FFFFFF";
        for (var i = 0; i < this.canvasState.paths.length; i++) {
            this.canvasState.ctx.beginPath();
            this.canvasState.ctx.moveTo(this.canvasState.paths[i][0].x,this.canvasState.paths[i][0].y);
            for (var j = 0; j < this.canvasState.paths[i].length; j++) {
                this.canvasState.ctx.lineTo(this.canvasState.paths[i][j].x,this.canvasState.paths[i][j].y);
            }
            this.canvasState.ctx.stroke();

            this.canvasState.ctx.beginPath()
            this.canvasState.ctx.lineWidth = 6;
            this.canvasState.ctx.arc(this.canvasState.paths[i][this.canvasState.paths[i].length-1].x,this.canvasState.paths[i][this.canvasState.paths[i].length-1].y, 10, 0, 2 * Math.PI);
            this.canvasState.ctx.fill();
            this.canvasState.ctx.stroke();
        }
    }

    /** @function sizeWindow
      * description: uses the size of the window and current location to determine the "curcuits" (lines and circles) size and location
      */
    sizeWindow(){
        this.canvasState.canvas.width = document.body.offsetWidth;
        this.canvasState.canvas.height = document.body.offsetHeight+75;
        this.canvasState.ctx = this.canvasState.canvas.getContext("2d");
        this.canvasState.bodyWidth = document.body.offsetWidth;
        this.canvasState.contentEnd = document.body.offsetHeight-document.getElementById("footer").offsetHeight;
        this.canvasState.headerHeight = document.getElementById("header").offsetHeight;
        document.getElementById("circuit-container").style.height = document.body.offsetHeight + 'px';

        switch(this.props.page){
            case 'home':
                //sets paths for window deminsions
                if(this.canvasState.bodyWidth > 900){
                    this.setFull();
                    this.canvasState.blueCircles = [
                        {path: 0, point: 0, x: 0, y: 0},
                        {path: 3, point: 2, x: 0, y: 0},
                        {path: 9, point: 4, x: 0, y: 0}
                    ];
                }
                else if(this.canvasState.bodyWidth > 700){
                    this.setTabletLarge();
                    this.canvasState.blueCircles = [
                        {path: 0, point: 0, x: 0, y: 0},
                        {path: 3, point: 2, x: 0, y: 0}
                    ];
                }
                else if(this.canvasState.bodyWidth > 400){
                    this.setTabletSmall();
                    this.canvasState.blueCircles = [
                        {path: 0, point: 0, x: 0, y: 0},
                        {path: 3, point: 2, x: 0, y: 0}
                    ];
                }
                else{
                    this.setMobile();
                    this.canvasState.blueCircles = [
                        {path: 0, point: 0, x: 0, y: 0},
                        {path: 3, point: 2, x: 0, y: 0}
                    ];
                }
                break;
            default:
                if(this.canvasState.bodyWidth > 1100){
                    this.setFullAlternate();
                    this.canvasState.blueCircles = [
                        {path: 0, point: 0, x: 0, y: 0},
                        {path: 3, point: 2, x: 0, y: 0}
                    ];
                }
                else if(this.canvasState.bodyWidth > 400){
                    this.setTabletSmall();
                    this.canvasState.blueCircles = [
                        {path: 0, point: 0, x: 0, y: 0},
                        {path: 3, point: 2, x: 0, y: 0}
                    ];
                }
                else{
                    this.setMobile();
                    this.canvasState.blueCircles = [
                        {path: 0, point: 0, x: 0, y: 0},
                        {path: 3, point: 2, x: 0, y: 0}
                    ];
                }
        }



        for(var i = 0; i < this.canvasState.blueCircles.length; i++){
            this.canvasState.blueCircles[i].x = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].x;
            this.canvasState.blueCircles[i].y = this.canvasState.paths[this.canvasState.blueCircles[i].path][this.canvasState.blueCircles[i].point].y;
        }
    };

    /** @function setfull
      * description: sets the paths of the 'circuits' to fit the size of a 'full' screen
      */
    setFull(){
        this.canvasState.state = 'full';
        this.canvasState.paths = [
            //top middle line
            [{x: 0, y: 200},
             {x: this.canvasState.bodyWidth*.5, y: 200},
             {x: this.canvasState.bodyWidth*.5+70, y: 270},
             {x: this.canvasState.bodyWidth*.5+140, y: 270}],

            //top top line
            [{x: 0, y: 200},
             {x: this.canvasState.bodyWidth*.5, y: 200},
             {x: this.canvasState.bodyWidth*.5+25, y: 225},
             {x: this.canvasState.bodyWidth*.5+100, y: 225}],

            //top bottom line
            [{x: 0, y: 225},
             {x: this.canvasState.bodyWidth*.5-12, y: 225},
             {x: this.canvasState.bodyWidth*.5+12, y: 250},
             {x: this.canvasState.bodyWidth*.5+12, y: 300}],

            //middle top line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.1, y: 250},
             {x: this.canvasState.bodyWidth*.1+50, y: 300},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight-120-200},
             {x: this.canvasState.bodyWidth*.1+150, y: this.canvasState.headerHeight-120-100},
             {x: this.canvasState.bodyWidth*.2+150, y: this.canvasState.headerHeight-120-100},
             {x: this.canvasState.bodyWidth*.2+250, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.7, y: this.canvasState.headerHeight-120}],

            //middle middle line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.1, y: 250},
             {x: this.canvasState.bodyWidth*.1+50, y: 300},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight-120-150},
             {x: this.canvasState.bodyWidth*.1+135, y: this.canvasState.headerHeight-120-65},
             {x: this.canvasState.bodyWidth*.2+135, y: this.canvasState.headerHeight-120-65},
             {x: this.canvasState.bodyWidth*.2+250, y: this.canvasState.headerHeight-120+50}],

            //middle bottom line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.1, y: 250},
             {x: this.canvasState.bodyWidth*.1+50, y: 300},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight-120-100},
             {x: this.canvasState.bodyWidth*.1+120, y: this.canvasState.headerHeight-120-30},
             {x: this.canvasState.bodyWidth*.2+110, y: this.canvasState.headerHeight-120-30}],

            //bottom left top line
            [{x: 0, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight-120+50},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.1+65, y: this.canvasState.contentEnd+15},
             {x: this.canvasState.bodyWidth*.1+300, y: this.canvasState.contentEnd+15}],

            //bottom left bottom line
            [{x: 0, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight-120+50},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.1+100, y: this.canvasState.contentEnd+50},
             {x: this.canvasState.bodyWidth*.1+200, y: this.canvasState.contentEnd+50}],

            //bottom right top line
            [{x: 0, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight-120+50},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight+((this.canvasState.bodyWidth-75)*.353)},
             {x: this.canvasState.bodyWidth*.9+25, y: this.canvasState.headerHeight+((this.canvasState.bodyWidth-75)*.353)},
             {x: this.canvasState.bodyWidth*.9+25, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.9+10, y: this.canvasState.contentEnd+15},
             {x: this.canvasState.bodyWidth*.9-225, y: this.canvasState.contentEnd+15}],

            //bottom right top line
            [{x: 0, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1, y: this.canvasState.headerHeight-120},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight-120+50},
             {x: this.canvasState.bodyWidth*.1+50, y: this.canvasState.headerHeight+((this.canvasState.bodyWidth-75)*.078)},
             {x: this.canvasState.bodyWidth*.9+25, y: this.canvasState.headerHeight+((this.canvasState.bodyWidth-75)*.078)},
             {x: this.canvasState.bodyWidth*.9+25, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.9-25, y: this.canvasState.contentEnd+50},
             {x: this.canvasState.bodyWidth*.9-125, y: this.canvasState.contentEnd+50}]
        ];
    }

    /** @function setFullAlternate
      * description: sets the paths of the 'circuits' to fit the size of a 'tablet small' screen
      */
    setFullAlternate(){
        this.canvasState.state = 'full-alternate';
        this.canvasState.paths = [
            //top middle line
            [{x: 0, y: 40},
             {x: this.canvasState.bodyWidth*.7, y: 40},
             {x: this.canvasState.bodyWidth*.7+70, y: 110},
             {x: this.canvasState.bodyWidth*.7+120, y: 110}],

            //top top line
            [{x: 0, y: 40},
             {x: this.canvasState.bodyWidth*.7, y: 40},
             {x: this.canvasState.bodyWidth*.7+25, y: 65},
             {x: this.canvasState.bodyWidth*.7+70, y: 65}],

            //top bottom line
            [{x: 0, y: 65},
             {x: this.canvasState.bodyWidth*.7-12, y: 65},
             {x: this.canvasState.bodyWidth*.7+12, y: 90},
             {x: this.canvasState.bodyWidth*.7+12, y: 140}],

            //bottom left top line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.11, y: 250},
             {x: this.canvasState.bodyWidth*.11+50, y: 300},
             {x: this.canvasState.bodyWidth*.11+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.11+65, y: this.canvasState.contentEnd+15},
             {x: this.canvasState.bodyWidth*.11+300, y: this.canvasState.contentEnd+15}],

            //bottom left bottom line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.11, y: 250},
             {x: this.canvasState.bodyWidth*.11+50, y: 300},
             {x: this.canvasState.bodyWidth*.11+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.11+100, y: this.canvasState.contentEnd+50},
             {x: this.canvasState.bodyWidth*.11+200, y: this.canvasState.contentEnd+50}]
        ];
    }

    /** @function setTabletLarge
      * description: sets the paths of the 'circuits' to fit the size of a 'tablet large' screen
      */
    setTabletLarge(){
        this.canvasState.state = 'tablet-large';
        this.canvasState.paths = [
            //top middle line
            [{x: 0, y: 70},
             {x: this.canvasState.bodyWidth*.7, y: 70},
             {x: this.canvasState.bodyWidth*.7+70, y: 140},
             {x: this.canvasState.bodyWidth*.7+120, y: 140}],

            //top top line
            [{x: 0, y: 70},
             {x: this.canvasState.bodyWidth*.7, y: 70},
             {x: this.canvasState.bodyWidth*.7+25, y: 95},
             {x: this.canvasState.bodyWidth*.7+70, y: 95}],

            //top bottom line
            [{x: 0, y: 95},
             {x: this.canvasState.bodyWidth*.7-12, y: 95},
             {x: this.canvasState.bodyWidth*.7+12, y: 120},
             {x: this.canvasState.bodyWidth*.7+12, y: 170}],

            //bottom left top line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.11, y: 250},
             {x: this.canvasState.bodyWidth*.11+50, y: 300},
             {x: this.canvasState.bodyWidth*.11+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.11+65, y: this.canvasState.contentEnd+15},
             {x: this.canvasState.bodyWidth*.11+300, y: this.canvasState.contentEnd+15}],

            //bottom left bottom line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.11, y: 250},
             {x: this.canvasState.bodyWidth*.11+50, y: 300},
             {x: this.canvasState.bodyWidth*.11+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.11+100, y: this.canvasState.contentEnd+50},
             {x: this.canvasState.bodyWidth*.11+200, y: this.canvasState.contentEnd+50}]
        ];
    }

    /** @function setTabletSmall
      * description: sets the paths of the 'circuits' to fit the size of a 'tablet small' screen
      */
    setTabletSmall(){
        this.canvasState.state = 'tablet-small';
        this.canvasState.paths = [
            //top middle line
            [{x: 0, y: 70},
             {x: this.canvasState.bodyWidth*.7, y: 70},
             {x: this.canvasState.bodyWidth*.7+70, y: 140},
             {x: this.canvasState.bodyWidth*.7+120, y: 140}],

            //top top line
            [{x: 0, y: 70},
             {x: this.canvasState.bodyWidth*.7, y: 70},
             {x: this.canvasState.bodyWidth*.7+25, y: 95},
             {x: this.canvasState.bodyWidth*.7+70, y: 95}],

            //top bottom line
            [{x: 0, y: 95},
             {x: this.canvasState.bodyWidth*.7-12, y: 95},
             {x: this.canvasState.bodyWidth*.7+12, y: 120},
             {x: this.canvasState.bodyWidth*.7+12, y: 170}],

            //bottom left top line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.11, y: 250},
             {x: this.canvasState.bodyWidth*.11+50, y: 300},
             {x: this.canvasState.bodyWidth*.11+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.11+65, y: this.canvasState.contentEnd+15},
             {x: this.canvasState.bodyWidth*.11+300, y: this.canvasState.contentEnd+15}],

            //bottom left bottom line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.11, y: 250},
             {x: this.canvasState.bodyWidth*.11+50, y: 300},
             {x: this.canvasState.bodyWidth*.11+50, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.11+100, y: this.canvasState.contentEnd+50},
             {x: this.canvasState.bodyWidth*.11+200, y: this.canvasState.contentEnd+50}]
        ];
    }

    /** @function setMobile
      * description: sets the paths of the 'circuits' to fit the size of a 'mobile' screen
      */
    setMobile(){
        this.canvasState.state = 'mobile';
        this.canvasState.paths = [
            //top middle line
            [{x: 0, y: 70},
             {x: this.canvasState.bodyWidth*.92, y: 70},
             {x: this.canvasState.bodyWidth*.92+70, y: 140},
             {x: this.canvasState.bodyWidth*.92+120, y: 140}],

            //top top line
            [{x: 0, y: 70},
             {x: this.canvasState.bodyWidth*.92, y: 70},
             {x: this.canvasState.bodyWidth*.92+25, y: 95},
             {x: this.canvasState.bodyWidth*.92+70, y: 95}],

            //top bottom line
            [{x: 0, y: 95},
             {x: this.canvasState.bodyWidth*.92-12, y: 95},
             {x: this.canvasState.bodyWidth*.92+12, y: 120},
             {x: this.canvasState.bodyWidth*.92+12, y: 170}],

            //bottom left top line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.07, y: 250},
             {x: this.canvasState.bodyWidth*.07+25, y: 275},
             {x: this.canvasState.bodyWidth*.07+25, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.07+40, y: this.canvasState.contentEnd+10},
             {x: this.canvasState.bodyWidth*.8, y: this.canvasState.contentEnd+10}],

            //bottom left bottom line
            [{x: 0, y: 250},
             {x: this.canvasState.bodyWidth*.07, y: 250},
             {x: this.canvasState.bodyWidth*.07+25, y: 275},
             {x: this.canvasState.bodyWidth*.07+25, y: this.canvasState.contentEnd},
             {x: this.canvasState.bodyWidth*.07+75, y: this.canvasState.contentEnd+40},
             {x: this.canvasState.bodyWidth*.55, y: this.canvasState.contentEnd+40}]
        ];
    }

    /** @function componentDidMount
      * description: executes when the component loaded (mounted). Watches for a window resize
      */
    componentDidMount(){
        this.setupComponent();
        window.addEventListener('resize', this.sizeWindow, false);
    }

    /** @function componentWillUnmount
      * description: executes when the component is no longer needed. No longer watches for a window resize.
      */
    componentWillUnmount() {
        clearInterval(this.timer);
        window.removeEventListener('resize', this.sizeWindow, false);
    }

    /** @function componentDidUpdate
      * description: executes when the component changes (this happens when we change pages, example: home to about, etc..).
      */
    componentDidUpdate() {
        this.sizeWindow();
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        return (
            <canvas id="myCanvas" ref={(canvas) => {this.canvasState.canvas = canvas;}}></canvas>
        );
    }
}

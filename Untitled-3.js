(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txtWinner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AhuCvIAAlVIBUAAIAAAwQAWgiAQgLQARgLAWAAQAfAAAdARIgcBPQgXgPgUAAQgTAAgNALQgMAKgHAcQgIAbAABWIAABqg");
	this.shape.setTransform(95.975,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("Ah9B5QgigvAAhHQAAhUAtgwQAsgxBEAAQBMAAAsAzQAsAygCBnIjiAAQABApAVAWQAVAWAeAAQAVAAAPgLQAOgMAIgaIBaAPQgRAygmAaQglAag5AAQhYAAgrg6gAgthXQgUAWABAlICGAAQgBgogTgUQgUgUgbAAQgdAAgTAVg");
	this.shape_1.setTransform(61.9293,5.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("ABBCvIAAiuQABg3gGgQQgGgQgNgJQgNgKgSABQgXAAgTAMQgTANgGAVQgHAWAAA4IAACbIhbAAIAAlVIBUAAIAAAyQAtg6BDAAQAeAAAZALQAZALANAQQAMARAGAWQAEAUAAAoIAADUg");
	this.shape_2.setTransform(23.8,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("ABBCvIAAiuQABg3gGgQQgGgQgNgJQgNgKgTABQgWAAgSAMQgTANgHAVQgHAWAAA4IAACbIhbAAIAAlVIBUAAIAAAyQAtg6BDAAQAeAAAZALQAYALANAQQANARAFAWQAFAUAAAoIAADUg");
	this.shape_3.setTransform(-16.5,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AgsDsIAAlVIBZAAIAAFVgAgsiXIAAhUIBZAAIAABUg");
	this.shape_4.setTransform(-45.825,-0.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AA6CrIg6jbIg6DbIhYAAIhslVIBYAAIBADfIA7jfIBWAAIA6DfIBBjfIBZAAIhuFVg");
	this.shape_5.setTransform(-80.65,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A5xK8IAA13MAzjAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtWinner, new cjs.Rectangle(-165,-70,330,140), null);


(lib.txtLoser = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhuCvIAAlVIBUAAIAAAwQAWgiAQgLQARgLAWAAQAfAAAdARIgcBPQgXgPgUAAQgTAAgNALQgMAKgHAcQgIAbAABWIAABqg");
	this.shape.setTransform(68.525,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah9B5QgigvAAhHQAAhUAtgwQAsgxBEAAQBMAAAsAzQAsAygCBnIjiAAQABApAVAWQAVAWAeAAQAVAAAPgLQAOgMAIgaIBaAPQgRAygmAaQglAag5AAQhYAAgrg6gAgthXQgUAWABAlICGAAQgBgogTgUQgUgUgbAAQgdAAgTAVg");
	this.shape_1.setTransform(34.4793,5.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhpCXQgpgdgNgwIBbgOQAGAaASAOQARAOAfAAQAjAAASgNQAMgJAAgPQAAgLgGgHQgHgGgYgFQhsgZgegUQgogaAAgyQAAgsAjgeQAjgfBKAAQBFAAAiAXQAiAXANAtIhVAQQgGgUgPgLQgPgLgcAAQgjAAgQAKQgKAHAAAMQAAAJAJAHQAMAJBIARQBIAQAdAYQAcAXAAArQAAAvgnAiQgoAihNAAQhFAAgogcg");
	this.shape_2.setTransform(-2.775,5.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhYCeQgrgWgWgoQgXgqAAg6QAAgtAXgqQAWgqApgWQAogXAyAAQBNAAAyAzQAxAyAABNQAABNgxAzQgzAzhLAAQgvAAgqgVgAg7hNQgYAbAAAyQAAAzAYAbQAZAbAiAAQAkAAAXgbQAYgbAAgzQAAgygYgbQgXgbgkAAQgiAAgZAbg");
	this.shape_3.setTransform(-40.3,5.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgsDsIAAnXIBZAAIAAHXg");
	this.shape_4.setTransform(-69.675,-0.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A5xK8IAA13MAzjAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txtLoser, new cjs.Rectangle(-165,-70,330,140), null);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjCgIgFgwQAOADAMAAQAWAAAKgMQAKgOAGgTIhZjpIBCAAIA2ClIA3ilIBAAAIhTDfIgOAqQgIAUgIAKQgHALgJAHQgJAGgOAEQgOAEgSAAQgSAAgRgEg");
	this.shape.setTransform(32.2,6.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXBmQgWgTABgeQgBgUAKgQQAJgPASgHQARgJAfgFQArgJARgHIAAgGQAAgRgJgIQgJgIgYAAQgQAAgJAHQgKAGgFAQIg4gKQAJghAYgRQAXgQAtAAQApAAATAKQAUAJAJAPQAIAQAAAoIgBBHQAAAeAEAQQACAOAJAQIg+AAIgGgSIgCgHQgPAQgTAHQgRAIgUAAQgkAAgUgUgAgBAOQgaAGgHAFQgNAIAAANQAAAOAKAJQAKAKAOAAQAQgBAQgKQALgJADgMQADgIAAgXIAAgLQgMAEgZAFg");
	this.shape_1.setTransform(7.4,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeChIAAlBIA9AAIAAFBg");
	this.shape_2.setTransform(-11.325,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhxCkIAAlCIA6AAIAAAjQALgSATgLQATgLAXAAQAoAAAdAgQAcAgAAA5QAAA5gdAhQgcAggpAAQgSAAgQgIQgQgHgRgTIAAB2gAglhhQgPASAAAiQAAAnAQASQAQATAVAAQAWAAAOgRQAOgQAAgoQAAgkgPgSQgOgSgWAAQgWAAgPARg");
	this.shape_3.setTransform(-30.725,6.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("Ax9EsIAApXMAj7AAAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnPlay, new cjs.Rectangle(-115,-30,230,60), null);


(lib.blueShape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueShape, new cjs.Rectangle(-50,-50,100,100), null);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let root = this;
		let score = 0;
		let level =1;
		
		
		this.txtLoser.visible=false;
		this.txtWinner.visible=false;
		
		const myBlues = [];
		
		function fillBlues () {
			myBlues.push(root.b1,root.b2,root.b3,root.b4,
		root.b5,root.b6,root.b7,root.b8, root.b9)
		}
		fillBlues ()
		
		const targetBlues = [];
		
		
		
		this.btnPlay.addEventListener("click", startGame);
		
		
		
		function startGame () {
			root.txtLoser.visible=false;
			root.txtWinner.visible=false;
			root.btnPlay.visible=false;
			//root.btnPlay.removeEventListener("click", startGame);
			generateNums ();
			setTimeout(resetTargetAlpha,5000)
		}
		
		function generateNums () {
			
			for(let i =0; i <level+2; i++) {
				let randomN = Math.floor(Math.random()*myBlues.length); 
				console.log(randomN);
				let blue = myBlues[randomN];
				blue.alpha = 0.5;
				targetBlues.push(blue)
				myBlues.splice(randomN,1);
				
			}
		
		}
		
		
		
			
			
		
		
		function resetTargetAlpha () {
			for(let i =0; i < targetBlues.length; i++) {
				targetBlues[i].alpha =1;
			}
		addCorrectListeners();
		addWrongListeners();
		}
		
		function addWrongListeners() {
			for(let i =0; i < myBlues.length; i++) {
				myBlues[i].addEventListener("click", wrongShapeClick)
			}
		}
		
		function wrongShapeClick (e) {
			console.log("you lost");
			if(level>1) {
				level--;
				
			}
			
			root.txtLoser.visible=true;
			resetGame ();
		}
		
		
		
		
		
		
		
		function addCorrectListeners () {
		
			for(let i =0; i <targetBlues.length; i++ ) {
				targetBlues[i].addEventListener("click",correctShapeClick)
			}
		}
		
		function correctShapeClick (e) {
			let blue = e.currentTarget;
			blue.alpha = 0.2;
			blue.removeEventListener("click",correctShapeClick)
			score++;
			console.log(score);
			if(score===targetBlues.length) {
				console.log("winner")
				if(level<6) {
					level++;
					
				}
				
				
				root.txtWinner.visible=true;
				resetGame();
			}
		}
		
		
		//reset game----------------------------------
		
		
		function removeWrongListeners () {
			for(let i =0; i < myBlues.length; i++) {
				myBlues[i].removeEventListener("click", wrongShapeClick)
			}
		}
		
		function removeCorrectListeners () {
			for(let i =0; i <targetBlues.length; i++ ) {
				targetBlues[i].removeEventListener("click",correctShapeClick)
			}
		}
		
		function resetMyBlues () {
			for(let i =0 ; i < myBlues.length; i++) {
				myBlues[i].alpha =1;
				
			}
		}
		
		function resetGame () {
			
			removeWrongListeners ()
			
			removeCorrectListeners ()
			
		
			score =0;
			root.btnPlay.visible=true;
			targetBlues.length = 0;
			myBlues.length = 0;
			fillBlues ()
			resetMyBlues ()
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1_copy
	this.txtLoser = new lib.txtLoser();
	this.txtLoser.name = "txtLoser";
	this.txtLoser.setTransform(250,230);

	this.timeline.addTween(cjs.Tween.get(this.txtLoser).wait(1));

	// Layer_1
	this.txtWinner = new lib.txtWinner();
	this.txtWinner.name = "txtWinner";
	this.txtWinner.setTransform(250,230);

	this.timeline.addTween(cjs.Tween.get(this.txtWinner).wait(1));

	// btn_play
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(250,450);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(1));

	// shapes
	this.b9 = new lib.blueShape();
	this.b9.name = "b9";
	this.b9.setTransform(360,330);

	this.b8 = new lib.blueShape();
	this.b8.name = "b8";
	this.b8.setTransform(240,330);

	this.b7 = new lib.blueShape();
	this.b7.name = "b7";
	this.b7.setTransform(120,330);

	this.b6 = new lib.blueShape();
	this.b6.name = "b6";
	this.b6.setTransform(360,210);

	this.b5 = new lib.blueShape();
	this.b5.name = "b5";
	this.b5.setTransform(240,210);

	this.b4 = new lib.blueShape();
	this.b4.name = "b4";
	this.b4.setTransform(120,210);

	this.b3 = new lib.blueShape();
	this.b3.name = "b3";
	this.b3.setTransform(360,90);

	this.b2 = new lib.blueShape();
	this.b2.name = "b2";
	this.b2.setTransform(240,90);

	this.b1 = new lib.blueShape();
	this.b1.name = "b1";
	this.b1.setTransform(120,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,290,95,190);
// library properties:
lib.properties = {
	id: '6060B5E261E1BA48BD234492E4FAA76C',
	width: 500,
	height: 500,
	fps: 24,
	color: "#DBE9FF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6060B5E261E1BA48BD234492E4FAA76C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
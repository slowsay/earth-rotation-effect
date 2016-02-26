/**
 * @author slowsay
 */
var _render, _stage, box, scene, trangleCanvas, dotpointer, lineCanvas, mouseCanvas;
var centerx = 0;
var centery = 0;
var _anglex = 0;
var _angley = 0;
var playflag = true;
var angle = 0;
var dutime = 0;
var Drawbox = {
	wid : 0,
	hei : 0,
	speeds : .002,
	upspeeds : .5,
	downspeeds : .08,
	mousex : 0,
	mousey : 0,
	round : 850,
	radius : 50,
	maxdot : 23,
	dotsarr : [],
	triarr : [],
	fixw : 850,
	fixh : 850,
	scaleX : 1,
	scaleY : 1,
	color : 0x034e5d,
	benefitsArr : [],
	init : function() {
		dutime = Date.now();
		//init stage
		msg = document.createElement('div');
		msg.setAttribute('id', 'msg');
		msg.style.position = 'absolute';
		msg.style.zIndex = 2;
		$(document.body).append(msg);
		//canvas
		centerx = Drawbox.fixw / 2, centery = Drawbox.fixh / 2;
		_stage = new PIXI.Stage(0x000000, true);
		_render = PIXI.autoDetectRenderer(Drawbox.wid, Drawbox.hei);
		document.body.appendChild(_render.view);
		for (var i = 0; i < 7; i++) {
			Drawbox.benefitsArr.push([0, 0, 0]);
		};

		//create
		scene = new PIXI.DisplayObjectContainer;
		box = new PIXI.DisplayObjectContainer;
		dotpointer = new PIXI.DisplayObjectContainer;
		lineCanvas = new PIXI.DisplayObjectContainer;
		trangleCanvas = new PIXI.DisplayObjectContainer;
		mouseCanvas = new PIXI.DisplayObjectContainer;

		var sp = new PIXI.Graphics();
		with (sp) {
			beginFill(0x044f64);
			drawRect(0, 0, 100, 100);
			endFill();
		}
		// _stage.addChild(sp);
		_stage.addChild(scene);
		_stage.addChild(mouseCanvas);
		scene.addChild(box);
		scene.addChild(dotpointer);
		//box inner
		box.addChildAt(trangleCanvas, 0);
		box.addChildAt(lineCanvas, 1);

		dotpointer.x = centerx * -1;
		dotpointer.y = centery * -1;
		lineCanvas.x = dotpointer.x, lineCanvas.y = dotpointer.y, trangleCanvas.x = dotpointer.x, trangleCanvas.y = dotpointer.y;

		Drawbox.drawdotPoint();
		Drawbox.drawcircleBg();
		//draw line
		Drawbox.drawdotLine();
		//draw trangle
		Drawbox.drawtrangle();
		Drawbox.reSize();
		Drawbox.update();
		//listener

		window.addEventListener('load', Drawbox.reSize, !1);
		window.addEventListener('resize', Drawbox.reSize, !1);
		window.addEventListener('mousemove', Drawbox.move, !1);
		window.addEventListener('click', Drawbox.click, !1);
	},
	click : function(e) {
		playflag == true ? playflag = false : playflag = true;
	},
	clearObject : function(obj) {
		while (obj.children.length) {
			obj.removeChildAt(0);
		}
	},
	drawtrangle : function() {
		Drawbox.clearObject(trangleCanvas);
		var len = triangle.length;
		var alpha = 1;
		for (var i = 0; i < len; i++) {
			var _tri = new PIXI.Graphics;
			trangleCanvas.addChild(_tri);
			alpha = Math.ceil(Math.random() * 4) / 10 + .4;
			_tri.beginFill(Drawbox.color, alpha);
			_tri.moveTo(triangle[i][0].x, triangle[i][0].y);
			_tri.lineTo(triangle[i][1].x, triangle[i][1].y);
			_tri.lineTo(triangle[i][2].x, triangle[i][2].y);
			_tri.lineTo(triangle[i][0].x, triangle[i][0].y);
			_tri.endFill();
			// Drawbox.triarr.push(_tri);
			_tri.alpha = 0;
		};
	},
	drawcircleBg : function() {
		var _circlebg = new PIXI.Graphics();
		_circlebg.clear();
		with (_circlebg) {
			beginFill(0x044f64, 0);
			lineStyle(2, 0x044f64, 1);
			drawCircle(0, 0, Math.ceil(Drawbox.round >> 1));
			endFill();
		}
		box.addChild(_circlebg);
		_circlebg.x = -4, _circlebg.y = -6;
	},
	drawdotLine : function() {
		var len = triangle.length;
		for (var i = 0; i < len; i++) {
			var _tri = new PIXI.Graphics;
			lineCanvas.addChild(_tri);
			_tri.lineStyle(1, Drawbox.color, 1);
			_tri.moveTo(triangle[i][0].x, triangle[i][0].y);
			_tri.lineTo(triangle[i][1].x, triangle[i][1].y);
			_tri.lineTo(triangle[i][2].x, triangle[i][2].y);
			_tri.lineTo(triangle[i][0].x, triangle[i][0].y);
			_tri.endFill();
		};
		var _triO = new PIXI.Graphics;
		lineCanvas.addChild(_triO);
		_triO.lineStyle(1, Drawbox.color, 1);
		_triO.moveTo(triangleOther[0].x, triangleOther[0].y);
		for (var j = 0; j < triangleOther.length; j++) {
			if (j > 0)
				_triO.lineTo(triangleOther[j].x, triangleOther[j].y);
		}
		_triO.endFill();
	},
	drawdotPoint : function() {
		var len = dot_data.length;
		for (var i = 0; i < len; i++) {
			var _dot = new PIXI.Graphics;
			dotpointer.addChild(_dot);
			var _x = dot_data[i].x;
			var _y = dot_data[i].y;
			_dot.beginFill(0x00ddff);
			_dot.drawCircle(0, 0, 2);
			// for (var j = 0; j < brandxy.length; j++) {
			// if (brandxy[j].x == dot_data[i].x && brandxy[j].y == dot_data[i].y) {
			// _dot.drawCircle(x, y, 4);
			// }
			// };
			// if (i < 21) {
			// _dot.lineTo(x, y);
			// }
			_dot.endFill();
			_dot.x = _x, _dot.y = _y;
			// Drawbox.dotsarr.push(_dot);
		};
	},
	repeatViewTriangle : function(arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < trangleCanvas.children.length; j++) {
				if (arr[i] == j) {
					TweenMax.to(trangleCanvas.getChildAt(j), Drawbox.upspeeds, {
						alpha : 1
					});
				}
			};
		};
	},
	dotPointer50 : function(arr) {
		//get dot_data position i;
		var savetriangle = [];
		for (var k = 0; k < arr.length; k++) {
			var _dotx = dot_data[arr[k]].x, _doty = dot_data[arr[k]].y;
			for (var i = 0; i < triangle.length; i++) {
				var t0 = triangle[i][0].x, t1 = triangle[i][0].y;
				var s0 = triangle[i][1].x, s1 = triangle[i][1].y;
				var z0 = triangle[i][2].x, z1 = triangle[i][2].y;
				if ((_dotx == t0 && _doty == t1) || (_dotx == s0 && _doty == s1) || (_dotx == z0 && _doty == z1)) {
					savetriangle.push(i);
				}

			};
		};
		Drawbox.repeatViewTriangle(savetriangle);
	},
	mouseDrawCircle : function() {

		var mx = Math.abs(Math.ceil(Drawbox.wid / 2 - (Drawbox.fixw * Drawbox.scaleY) / 2));
		var my = Math.abs(Math.ceil(Drawbox.hei / 2 - (Drawbox.fixh * Drawbox.scaleY) / 2));
		var savetriangle = [];
		var _scale = Drawbox.radius * Drawbox.scaleY;
		var _x = Math.abs(Drawbox.mousex), _y = Math.abs(Drawbox.mousey);

		// Drawbox.clearObject(mouseCanvas);
		// var _graphics = new PIXI.Graphics;
		// _graphics.clear();
		// with (_graphics) {
		// beginFill(0xffffff, .2);
		// drawCircle(Drawbox.mousex, Drawbox.mousey, _scale);
		// // drawEllipse(Drawbox.mousex, Drawbox.mousey,_scale,10);
		// endFill();
		// }
		// mouseCanvas.addChild(_graphics);

		//
		for (var i = 0; i < dotpointer.children.length; i++) {

			var _r = Math.sqrt(Math.pow(_y - Math.ceil(my + dotpointer.getChildAt(i).y * Drawbox.scaleY), 2) + Math.pow(_x - Math.ceil(mx + dotpointer.getChildAt(i).x * Drawbox.scaleY), 2));
			if (Math.ceil(_r) <= _scale) {
				savetriangle.push(i);
				// $('#msg').html(_x + ':' + _y + '>>' + i);
				// console.log(dotpointer.getChildAt(i).x,dotpointer.getChildAt(i).y);
			}
			// var _graphics2 = new PIXI.Graphics;
			// with (_graphics2) {
			// lineStyle(1, 0xffffff, .5);
			// moveTo(mx + dotpointer.getChildAt(i).x * Drawbox.scaleY, my + dotpointer.getChildAt(i).y * Drawbox.scaleY);
			// lineTo(_x, _y);
			// endFill();
			// }
			// mouseCanvas.addChild(_graphics2);
		};
		Drawbox.dotPointer50(savetriangle);
	},
	trangleCanvasDown : function() {
		for (var i = 0; i < trangleCanvas.children.length; i++) {
			if (trangleCanvas.getChildAt(i).alpha > 0) {
				trangleCanvas.getChildAt(i).alpha -= Drawbox.downspeeds;
			}
		}
	},
	update : function() {
		if (playflag) {
			box.rotation += Drawbox.speeds;
		}
		if (box.rotation >= 360)
			box.rotation = 0;
		requestAnimFrame(Drawbox.update);
		_render.render(_stage);
		Drawbox.render();
		Drawbox.mouseDrawCircle();
		if (Math.abs(dutime - Date.now()) > 1e3) {

			Drawbox.upspeeds = 1;
			Drawbox.downspeeds = .008;
		}
		Drawbox.trangleCanvasDown();
		// $('#msg').html(Drawbox.upspeeds + '>>' + Drawbox.downspeeds);
	},
	trianglePosition : function() {

	},
	pointerPosition : function() {
		//exchange dot position
		for (var i = 0; i < dotpointer.children.length; i++) {
			var obj = dotpointer.getChildAt(i);
			var vx = obj.x, vy = obj.y;
			var _r = Math.sqrt(Math.pow(centery - vy, 2) + Math.pow(centerx - vx, 2));
			var _anglex = Math.asin((centerx - vx) / _r), _angley = Math.acos((centery - vy) / _r);
			vx > centerx ? vy < centery ? angle = _anglex : angle = Math.PI - _anglex : vy > centery ? angle = _angley : angle = _anglex;
			Math.abs(angle) >= 360 ? angle = 0 : angle -= Drawbox.speeds;
			obj.x = centerx - _r * Math.sin(angle);
			obj.y = centery - _r * Math.cos(angle);
			// console.log(obj.x, obj.y, _r);
			// if (i == 0)
				// $('#msg').html(_r);
		};
	},
	render : function() {
		if (playflag) {
			Drawbox.pointerPosition();
			Drawbox.trianglePosition();
		}
	},
	reSize : function() {
		Drawbox.wid = window.innerWidth, Drawbox.hei = window.innerHeight;
		_stage.width = Drawbox.wid, _stage.height = Drawbox.hei;
		_render.resize(Drawbox.wid, Drawbox.hei);
		// Drawbox.scaleX = Drawbox.wid < Drawbox.fixw ? Drawbox.wid / Drawbox.fixw : 1;
		Drawbox.scaleY = Drawbox.hei < Drawbox.fixh ? Drawbox.hei / (Drawbox.fixh + 200) : 1;
		// _render.view.style.width = Drawbox.wid + 'px', _render.view.style.height = Drawbox.hei + 'px';
		scene.scale.x = scene.scale.y = Drawbox.scaleY;
		scene.x = Math.ceil(Drawbox.wid / 2), scene.y = Math.ceil(Drawbox.hei / 2);
	},
	move : function(e) {
		Drawbox.wid = window.innerWidth, Drawbox.hei = window.innerHeight;
		Drawbox.mousex = e.clientX, Drawbox.mousey = e.clientY;
		Drawbox.upspeeds = .6;
		Drawbox.downspeeds = .0202;
		dutime = Date.now();
	}
};

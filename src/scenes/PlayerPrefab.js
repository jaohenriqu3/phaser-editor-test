
// You can write more code here

import { ANIM_DOWN, ANIM_LEFT, ANIM_RIGHT, ANIM_TURN, ANIM_UP, ANIM_TURN2, ANIM_TURNUP } from "../../assets/animations.js";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 24, y ?? 38, texture || "sprite-test", frame);

		this.name = "player";
		scene.physics.add.existing(this);
		this.body.enable = true;
		this.body.setSize(64, 64, false);

		this.body.setCollideWorldBounds(true); 

		/* START-USER-CTR-CODE */
		this.scene.events.once("scene-awake", () => this.awake())
		/* END-USER-CTR-CODE */
	}

	///** @type {string} */
	AutoPlayAnimation = "turn";

	/* START-USER-CODE */

	awake(){
		this.play(this.AutoPlayAnimation);
	}

	moveLeft(){
		this.setVelocityX(-80) 
		this.play(ANIM_LEFT, true)
	}

	moveRight(){
		this.setVelocityX(80)
		this.play(ANIM_RIGHT, true)
	}

	moveDown(){
		this.setVelocityY(80)
		this.play(ANIM_DOWN, true)
	}

	moveUp(){
		this.setVelocityY(-80)
		this.play(ANIM_UP, true)
	}

	stopMoving(){
		this.setVelocityX(0) 
		this.play(ANIM_TURN, true)
	}

	stopMoving2(){
		this.setVelocityX(0) 
		this.play(ANIM_TURN2, true)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

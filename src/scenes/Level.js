// You can write more code here

/* START OF COMPILED CODE */

import PlayerPrefab from "./PlayerPrefab.js";
/* START-USER-IMPORTS */
import { ANIM_DOWN, ANIM_LEFT, ANIM_RIGHT, ANIM_TURN, ANIM_UP, ANIM_TURN2, ANIM_TURNUP } from "../../assets/animations.js";
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// delfi_city
		const delfi_city = this.add.tilemap("delfi-city");

		// up-key
		const up_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// down-key
		const down_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// left-key
		const left_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// right-key
		const right_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// delfi_city_1
		const delfi_city_1 = this.add.tilemap("delfi-city");

		// delfi_city_2
		const delfi_city_2 = this.add.tilemap("delfi-city");

		// delfi_city_3
		const delfi_city_3 = this.add.tilemap("delfi-city");

		// delfi_city_4
		const delfi_city_4 = this.add.tilemap("delfi-city");

		// delfiCity
		const delfiCity = this.add.tilemap("delfiCity");
		delfiCity.addTilesetImage("city-map", "tilemap_packed");

		// delfiCity_1
		const delfiCity_1 = this.add.tilemap("delfiCity");
		delfiCity_1.addTilesetImage("city-map", "tilemap_packed");

		// delfiCityn
		const delfiCityn = this.add.tilemap("delfiCityn");
		delfiCityn.addTilesetImage("city-map", "tilemap_packed");

		// delfiCityn_1
		const delfiCityn_1 = this.add.tilemap("delfiCityn");
		delfiCityn_1.addTilesetImage("city-map", "tilemap_packed");

		// ch_o_1
		delfiCityn.createLayer("Chão", ["city-map"], 0, 0);

		// objetos_1
		delfiCityn_1.createLayer("Objetos", ["city-map"], 0, 0);

		// player
		const player = new PlayerPrefab(this, 728, 510);
		this.add.existing(player);
		player.name = "player";

		// player (prefab fields)
		player.AutoPlayAnimation = "";

		this.player = player;
		this.delfi_city = delfi_city;
		this.up_key = up_key;
		this.down_key = down_key;
		this.left_key = left_key;
		this.right_key = right_key;
		this.delfi_city_1 = delfi_city_1;
		this.delfi_city_2 = delfi_city_2;
		this.delfi_city_3 = delfi_city_3;
		this.delfi_city_4 = delfi_city_4;
		this.delfiCity = delfiCity;
		this.delfiCity_1 = delfiCity_1;
		this.delfiCityn = delfiCityn;
		this.delfiCityn_1 = delfiCityn_1;

		this.events.emit("scene-awake");
	}

	/** @type {PlayerPrefab} */
	player;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city;
	/** @type {Phaser.Input.Keyboard.Key} */
	up_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	down_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	left_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	right_key;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city_1;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city_2;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city_3;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city_4;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfiCity;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfiCity_1;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfiCityn;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfiCityn_1;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate(); 

		 // Ajustar o zoom da câmera
		 this.cameras.main.setZoom(1.0); // Ajuste o valor conforme necessário (ex: 1.5, 2, etc.)

		 // Centralizar a câmera no mapa
		 this.cameras.main.setBounds(0, 0, this.map, this.map); 

		 // Adicionar teclado
		 this.cursors = this.input.keyboard.createCursorKeys(); 

		 //this.player.play("right")
	}

	update(){

		this.player.setVelocity(0);

		if (this.left_key.isDown){
			this.player.setVelocityX(-80);
			this.player.play(ANIM_LEFT , true);
			this.lastDirection = "left";
		} 
		else if (this.right_key.isDown){
			this.player.setVelocityX(80);
			this.player.play(ANIM_RIGHT, true);
			this.lastDirection = "right";
		}
		else if (this.up_key.isDown){
			this.player.setVelocityY(-80); 
			this.player.play(ANIM_UP, true)
			this.lastDirection = "up";
		} 
		else if (this.down_key.isDown){
			this.player.setVelocityY(80);
			this.player.play(ANIM_DOWN, true);
			this.lastDirection = "right";
	    } else {
			if (this.lastDirection === "right") {
				this.player.play(ANIM_TURN, true);
			} else if (this.lastDirection === "left") {
				this.player.play(ANIM_TURN2, true);
			} else if (this.lastDirection === "up") {
				this.player.play(ANIM_TURNUP, true); 
			}
		}

	}
}

/* END-USER-CODE */


/* END OF COMPILED CODE */

// You can write more code here
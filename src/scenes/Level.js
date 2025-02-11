// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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
		delfi_city.addTilesetImage("city-map", "tilemap_packed");

		// delfi_city_1
		const delfi_city_1 = this.add.tilemap("delfi-city");
		delfi_city_1.addTilesetImage("city-map", "tilemap_packed");

		// delfi_city_2
		const delfi_city_2 = this.add.tilemap("delfi-city");
		delfi_city_2.addTilesetImage("city-map", "tilemap_packed");

		// ch_o_1
		delfi_city_1.createLayer("Chão", ["city-map"], 0, 0);

		// objetos_1
		delfi_city_2.createLayer("Objetos", ["city-map"], 0, 0);

		this.delfi_city = delfi_city;
		this.delfi_city_1 = delfi_city_1;
		this.delfi_city_2 = delfi_city_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city_1;
	/** @type {Phaser.Tilemaps.Tilemap} */
	delfi_city_2;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate(); 

		 // Ajustar o zoom da câmera
		 this.cameras.main.setZoom(1.0); // Ajuste o valor conforme necessário (ex: 1.5, 2, etc.)

		 // Centralizar a câmera no mapa
		 this.cameras.main.setBounds(0, 0, this.map, this.map);
		
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
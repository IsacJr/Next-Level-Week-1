interface Params {
    id: number;
    name: string;
    image: string;
    latitude: number;
    longitude: number;
  }

interface Point {
    id: number;
    name: string;
    image: string;
    image_url: string;
    latitude: number;
    longitude: number;
}

class SerializePoints {

    serialize (points: Params[]) {
            
        const aux = points.map((point) => {
            return {
                ...point,
                image_url: `http://192.168.25.170:3333/uploads/${point.image}`,
            };
        });

        return aux as unknown as Point[];
    }

}

export default SerializePoints;
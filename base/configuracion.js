const db = firebase.firestone();

export async function insert(item){
    try {
        const response = await db.collection("productos-bazar").add(item);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

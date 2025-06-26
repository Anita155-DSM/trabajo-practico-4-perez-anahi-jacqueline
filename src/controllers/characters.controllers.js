import characters from "../models/character.models";

const createCharacter = async (req, res) => {
    const { name, race, gender, ki } = req.body;
    if (!name || !race || !ki || !gender){
        return res.status(400).json ({ message: "faltan datos obligatorios"})
    }
    if (!Number.isInteger(ki)){
        return res.status(400).json ({ message: "Solo se aceptan números enteros"})
    }
    if (gender !== "Female" && gender !== "Male"){
        return res.status(400).json ({ message: "El género debe ser Male o Female" });
    }
    try{
        const CharacterExist =  await characters.findOne
        ({where: { name }});
        if (CharacterExist){
            return res.status(400).json ({mensaje: "este personaje ya existe"})
        }
        const CharacterNew = await characters.create({ name, ki, race, gender});
        res.status(201).json({CharacterNew});
    } catch (error){
        console.error(error);
        res.status(500).json ({message: "error al crear personaje"})
    }
};
const getAllCharacters = async (req, res) => {
    try{
        const character = await characters.findAll();
        res.status(200).json(character)
    }catch(error){
        res.status(500).json ({mensage: "no se encontraron personajes"})
    }
}
const getCharacterID = async (req, res)=> {
    try{
        const character = await characters.findByPk(id)
        res.status(200).json (characters)
    }catch (error){
        res.status(500).json ({message:"no se encontró ese personaje por su ID"})
    }
}
const characterUpdate = async (req, res)=> {
    const {id} = req.params;
    const {name, race, gender, ki} = req.body;

    try{
        const character = await characters.findByPk(id);
        if (!character){
            return res.status(404).json({message: "No encontrado :("})
        }
        if (!name || !race || !gender || !ki){
            return res.status(500).json({message:"faltan datos obligatorios"})
        }
        if (!Number.isInteger(ki)) {
            res.status(500).json({message:"no es un numero entero, no es válido"})
        }
        if (gender !== 'Male' && gender !== 'Female') {
        return res.status(400).json({ message: 'El género debe ser "Male" o "Female"' });
        }
        const nameUsed = await characters.findOne({ where: { name } });
        if (nameUsed && nameUsed.id != id) {
        return res.status(400).json({ message: 'Ya existe un personaje con ese nombre' });
        }
        await character.update({ name, ki, race, gender });
        res.status(400).json(character);
        }catch(error) {
        res.status(500).json({ message: 'Error al actualizar el personaje' });
        }
    };
 
import axios from "axios";

const getAllAppliances = async () => {
    try {
        const response = await axios.get(
            'http://localhost:5000/appliances');
        return response.data;
    } catch (error) {
        console.error('Error fetching appliances:', error);
        throw error;
    }
};

const getSingleAppliance =  async (serialNo) => {
    try {
        const response = await axios.get(
            `http://localhost:5000/appliances?serialNo=${serialNo}`);

        return response.data;
    } catch (error) {
        console.error('Error fetching appliances:', error);
        throw error;
    }
};


export { getAllAppliances, getSingleAppliance };


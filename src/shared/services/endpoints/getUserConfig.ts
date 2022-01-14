import { Alert } from "react-native";
import api from "../config";

const getUserConfig = async (
  username: string,
  setLoading: (value: boolean) => void
) => {
  try {
    setLoading(true);
    const { data } = await api.get(username);
    setLoading(false);

    return data;
  } catch (err) {
    setLoading(false);

    Alert.alert("Invalid username", "This user doesn`t exist.", [
      { text: "Close", style: "destructive" },
    ]);
  }
};

export default getUserConfig;

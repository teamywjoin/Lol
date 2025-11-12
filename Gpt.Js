import static spark.Spark.*;
import com.google.gson.*;

public class GPTServer {
    public static void main(String[] args) {
        post("/gpt", (req, res) -> {
            Gson gson = new Gson();
            Map<String, String> data = gson.fromJson(req.body(), Map.class);
            String prompt = data.get("prompt");

            // OpenAI API 호출
            String gptResponse = callOpenAI(prompt);

            return gson.toJson(Map.of("response", gptResponse));
        });
    }
}

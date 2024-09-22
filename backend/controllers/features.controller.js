import { writeFileSync } from "fs";

// export the featurs controller function
export const writ_text_to_file = (req, res) => {
  // convert the req.body to json
  const data = JSON.stringify(req.body);

  const json_to_file = (data, filename = "test") => {
    writeFileSync(`${filename}.json`, data);
  };
};

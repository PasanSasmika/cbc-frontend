import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Znd2eGZqdmhwaHRlZXp0d2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4Njc2NTUsImV4cCI6MjA1MTQ0MzY1NX0.iL1_XZ8BGSt1A00HkmU3sbuOp8tR6F5ZUFgt7Zx51Jk
`;

const url = "https://dyfwvxfjvhphteeztwgj.supabase.co";

export default function uploadMediaToSupabase(file) {
  return new Promise((resolve, reject) => {

    if (file == null) {
      reject("File not added");
    }

    let fileName = file.name;
    const extension = fileName.split(".")[fileName.split(".").length - 1];

    const supabase = createClient(url, key);

const timestamp = new Date().getTime();

fileName = timestamp +file.name+ "." + extension;

supabase.storage.from("images").upload(fileName, file, {
    cacheControl: "3600",
    upsert: false,
  }).then(()=>{
    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
    resolve(publicUrl);
  }).catch((err)=>{
    reject(err);
  });
  });
}













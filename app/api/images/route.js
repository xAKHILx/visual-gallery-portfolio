import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public/images");
    const files = fs.readdirSync(imagesDir);

    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

    const images = files
      .filter((file) =>
        imageExtensions.includes(path.extname(file).toLowerCase())
      )
      .map((file) => `/images/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json(
      { error: "Error reading images directory" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Path to the JSON file
        const filePath = path.join(process.cwd(), "src", "data", "landing-content.json");

        // Write the new content to the file
        await fs.writeFile(filePath, JSON.stringify(data, null, 4), "utf-8");

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to save landing content:", error);
        return NextResponse.json(
            { success: false, error: "Failed to save content" },
            { status: 500 }
        );
    }
}

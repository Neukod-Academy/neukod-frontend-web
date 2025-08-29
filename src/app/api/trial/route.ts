import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { parentName, email, phone, country, courses, duration } = body

    if (!parentName || !email || !phone || !country || !courses || !duration) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!Array.isArray(courses) || courses.length === 0) {
      return NextResponse.json({ error: "At least one course must be selected" }, { status: 400 })
    }

    // Generate appointment data with ISO8601 format
    const now = new Date()
    const appointmentData = {
      ...body,
      appointment: {
        timestamp: now.toISOString(), // ISO8601 format
        day: now.toLocaleDateString("en-US", { weekday: "long" }),
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      },
      submittedAt: now.toISOString(),
    }

    // Here you would typically save to database
    console.log("Trial request received:", appointmentData)

    return NextResponse.json(
      {
        message: "Trial request submitted successfully",
        data: appointmentData,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing trial request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

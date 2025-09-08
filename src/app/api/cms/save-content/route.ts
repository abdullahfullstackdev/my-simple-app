import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contentId, propertyName, newValue, oldValue } = body;

    console.log('Saving content:', { contentId, propertyName, newValue, oldValue });

    // Here you would typically make an API call to Optimizely CMS to save the content
    // For now, we'll simulate the save operation
    
    // In a real implementation, you would:
    // 1. Authenticate with Optimizely CMS API
    // 2. Update the content property
    // 3. Return success/failure response
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // For demonstration, we'll just log the change
    console.log(`Content saved: ${propertyName} changed from "${oldValue}" to "${newValue}"`);

    return NextResponse.json({
      success: true,
      message: 'Content saved successfully',
      data: {
        contentId,
        propertyName,
        newValue,
        oldValue,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error saving content:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Failed to save content',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

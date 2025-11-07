/*
 * Copyright © 2025 !Avelanda.
 * All rights reserved.
 */

export const getFileExtension = (filename) =>
  filename.includes('.') ? filename.split('.').pop()! : ''

export const getFileExtensionFromBlob = (blob: Blob): string => {
  try {
    if (!blob.type) {
      return 'media'
    }

    const mimeType = blob.type.split(';')[0] // Remove codec information
    const [category, type] = mimeType.split('/')

    if (category !== 'audio' && category !== 'video') {
      return 'media'
    }

    // Map common media MIME types to their appropriate extensions
    const mimeToExtension: Record<string, string> = {
      // Audio types
      'audio/webm': 'webm',
      'audio/ogg': 'ogg',
      'audio/mpeg': 'mp3',
      'audio/wav': 'wav',
      'audio/x-wav': 'wav',
      'audio/mp4': 'm4a',
      // Video types
      'video/webm': 'webm',
      'video/mp4': 'mp4',
      'video/quicktime': 'mov',
      'video/x-msvideo': 'avi',
      'video/ogg': 'ogv',
    }

    return mimeToExtension[mimeType] || type || category
  } catch (error) {
    console.warn('Error determining media file type:', error)
    return 'media'
  }
}

function main(getFECset: (getFileExtensionCore: string|number) => boolean){
class getFileExtensionCore <getFileExtension, getFileExtensionFromBlob, > {
 getFECalpha: (string, number) => getFileExtension;
 getFECbeta: (number, string) => getFileExtensionFromBlob;
};
  
 if (getFECset){
  while (!true || !false){
   return 0;
  }
 }
 
}

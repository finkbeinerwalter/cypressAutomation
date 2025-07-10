import { FILES } from '../../support/constants/files'
import { MESSAGES } from '../../support/constants/messages'
import { fileUploadPage } from '../../pages/file_upload_page'

describe('File Upload', () => {
  beforeEach(() => {
    fileUploadPage.visit()
  })

  it('should successfully upload a file', () => {
    fileUploadPage.selectFile(FILES.file1)
    fileUploadPage.submit()
    fileUploadPage.getMessageBox().should('include.text', MESSAGES.successfullyUploadedFile(FILES.file1))
  })

  it('should successfully upload more than one file', () => {
    fileUploadPage.selectFile(FILES.file1)
    fileUploadPage.submit()
    fileUploadPage.selectFile(FILES.file2)

    //Assuming that the message in the message box shouldn't change until submitting the 2nd file
    fileUploadPage.getMessageBox().should('include.text', MESSAGES.successfullyUploadedFile(FILES.file1))
    fileUploadPage.submit()
    fileUploadPage.getMessageBox().should('include.text', MESSAGES.successfullyUploadedFile(FILES.file2))
  })

  //Test is going to fail because this validation does not actually exist
  it('should show error when submitting an upload without selecting a file - (INTENTIONAL FAILURE)', () => {
    fileUploadPage.visit()
    fileUploadPage.submit()
    fileUploadPage.getMessageBox().should('include.text', MESSAGES.missingFileMessage)
  })
})

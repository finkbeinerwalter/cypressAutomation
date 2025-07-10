import { URLS } from '../support/constants/urls'

/**
 * Representation of /file-upload page
 */
class FileUploadPage {
  /**
   * Navigates to the file-upload page
   */
  visit() {
    cy.visit(URLS.fileUploadUrl)
  }

  /**
   * Selects file existing inside the project's "fixtures/files" directory (and sub-directories) for upload
   *
   * @param {*} fixtureFilePath path to the file, where the root is the /fixtures/files directory
   */
  selectFile(fixtureFilePath) {
    /* 
      Could not use alias for fixture due to bug https://github.com/cypress-io/cypress/issues/21936
      ...
      cy.fixture('files/${fixtureFilePath}').as('file')
      ...
    */
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/files/${fixtureFilePath}`)
  }

  /**
   * Submits the file upload
   */
  submit() {
    cy.get('button[type="submit"]').click()
  }

  /**
   * @returns the file upload message box
   */
  getMessageBox() {
    return cy.get('#file_upload_response')
  }
}

export const fileUploadPage = new FileUploadPage()

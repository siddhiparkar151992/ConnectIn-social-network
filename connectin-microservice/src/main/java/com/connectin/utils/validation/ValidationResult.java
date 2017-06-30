/**
 *
 */
package com.connectin.utils.validation;

/**
 * @author Dell
 */
public class ValidationResult {

    private boolean isValid;
    private String error;

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean isValid) {
        this.isValid = isValid;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }


}

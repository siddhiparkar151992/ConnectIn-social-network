package com.connectin.exceptions;

public class InvalidParametersException extends Exception {

    private static final long serialVersionUID = 1L;


    /**
     *
     */
    public InvalidParametersException() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @param arg0
     * @param arg1
     * @param arg2
     * @param arg3
     */
    public InvalidParametersException(String arg0, Throwable arg1, boolean arg2, boolean arg3) {
        super(arg0, arg1, arg2, arg3);
        // TODO Auto-generated constructor stub
    }

    /**
     * @param arg0
     * @param arg1
     */
    public InvalidParametersException(String arg0, Throwable arg1) {
        super(arg0, arg1);
        // TODO Auto-generated constructor stub
    }

    /**
     * @param arg0
     */
    public InvalidParametersException(String arg0) {
        super(arg0);
        // TODO Auto-generated constructor stub
    }

    /**
     * @param arg0
     */
    public InvalidParametersException(Throwable arg0) {
        super(arg0);
        // TODO Auto-generated constructor stub
    }

    /* (non-Javadoc)
     * @see java.lang.Throwable#getMessage()
     */
    @Override
    public String getMessage() {
        // TODO Auto-generated method stub
        return super.getMessage();
    }

    /* (non-Javadoc)
     * @see java.lang.Throwable#toString()
     */
    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }

}

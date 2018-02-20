// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

import java.util.ArrayList;
import java.util.List;

class Solution {

    public static void main(String[] args) {
//        solution("SMS messages are real iamj short", 12);
        solution(0, 67890);
    }

    public static int len(int n) {
        if (n == 0) return 1;
        int l;
        n = Math.abs(n);
        for (l = 0; n > 0; ++l)
            n /= 10;
        return l;
    }

    public static int solution(int A, int B) {
        int number = 1;

        int l1 = len(A);
        int l2 = len(B);
        int counter = 1;
        int r = 1;

        while (counter < l1 + l2) {
            r *= 10;
            counter++;
        }
        int offset = r;
        int len1 = len(A);
        int len2 = len(B);
        int divisor1 = 1;
        int divisor2 = 1;
        while (len1 > 1) {
            divisor1 *= 10;
            len1--;
        }

        while (len2 > 1) {
            divisor2 *= 10;
            len2--;
        }
        int count = 0;
        while (divisor1 >= 1 && divisor2 >= 1) {

            int digit1 = (A / divisor1) % 10;
            int digit2 = (B / divisor2) % 10;

            System.out.println("");
            if (count == 0) {
                r = (r * digit1) + (digit2 * (r / 10));
            } else {
                r = (offset * digit1 + r) + (digit2 * (offset / 10));
            }

            divisor1 /= 10;
            divisor2 /= 10;
            offset /= 100;
            count++;
        }

        while (divisor1 >= 1) {
            int digit1 = (A / divisor1) % 10;
            r = offset * digit1 + (r);
            divisor1 /= 10;
            offset /= 10;
        }

        while (divisor2 >= 1) {
            int digit2 = (B / divisor2) % 10;
            r = offset * digit2 + (r);
            divisor2 /= 10;
            offset /= 10;
        }
        return r;
    }

    public static int solution1(String S, int K) {
        int i = 0;
        List<String> result = new ArrayList<String>();
        int j = 0;
        while (i < S.length()) {
            int start = i;
            char c = S.charAt(i);
            int counter = 0;
            String currStr = "";
            int lastspace = 0;
            while (i < S.length() && counter < K) {
                if (S.charAt(i) == ' ') {
                    lastspace = i;
                }
                if (currStr == "" && S.charAt(i) == ' ') {

                } else {
                    currStr += S.charAt(i);
                }

                i++;
                counter++;
            }
            if (i < S.length() && S.charAt(i) != ' ') {
                i = lastspace + 1;
                currStr = currStr.substring(0, lastspace - start);
                result.add(currStr);
            } else {
                result.add(currStr);
            }
            j++;
        }
        return result.size();
    }
}
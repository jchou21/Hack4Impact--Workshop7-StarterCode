class test{
    public static void main(String[] args) {
        System.out.println(indexOf('b', "Rabbit"));
    }

    public static int indexOf(char ch, String str){
        int index;

        if(str == null || str.length() == 0){
            return -1;
        }
        else {
            if(str.charAt(0) == ch){
                index = 0;
            } else {
                int subIndex = indexOf(ch, str.substring(1));
                if(subIndex != -1){
                    index = 1 + subIndex;
                }else{
                    index = -1;
                }
            }
            return index;
        }
        
    }
}
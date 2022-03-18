actor voteCounter{

    //initial votes for both candidates
     stable var candidateA : Nat = 0;
      stable var candidateB : Nat = 0;

//invrease votes for candidateA
    public func voteA() : async  Nat {
         candidateA := candidateA + 1;
    return candidateA;
  };

  //invrease votes for candidateB
    public func voteB() : async Nat {
        candidateB := candidateB + 1;
    return candidateB;
  };

  //get candidateA votes
  public  query func getA() : async Nat {
    return candidateA;
  };

    //get candidateB votes
  public  query func getB() : async Nat {
   return candidateB;
  };
};

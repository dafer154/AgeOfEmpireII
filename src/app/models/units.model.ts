export class Units {
    units: [
        {
          id: number;
          name: string;
          description: string;
          expansion: string;
          age: string;
          created_in: string;
          cost: {
            Wood: number;
            Food: number;
            Stone: number;
            Gold: number;
          },
          build_time: number;
          reload_time: number;
          attack_delay: number;
          movement_rate: number;
          line_of_sight: number;
          hit_points: number;
          range: string;
          attack: number;
          armor: string;
          attack_bonus: [string];
          armor_bonus: [string];
          search_radius: number;
          accuracy: string;
          blast_radius: number;
        }
      ];
}